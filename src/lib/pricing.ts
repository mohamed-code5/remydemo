/* -------------------------------------------------------------------------- */
/*  Remy pricing model                                                        */
/*                                                                            */
/*  Kept separate from the view so the plans, overage math, and the plan      */
/*  recommendation logic can be reused (calculator, comparison table, docs,   */
/*  checkout) without duplicating business rules.                             */
/* -------------------------------------------------------------------------- */

export type PlanId = "starter" | "pro" | "multi" | "enterprise";

export type Plan = {
  id: PlanId;
  name: string;
  /** Base price per month in USD. `null` means custom / talk to sales. */
  monthly: number | null;
  /** AI voice minutes bundled into the base price. `null` means unlimited. */
  includedMinutes: number | null;
  /** USD per minute beyond `includedMinutes`. `null` means not applicable. */
  overage: number | null;
  /** Numbers (== locations) included before the per-location add-on kicks in. `null` means unlimited. */
  numbers: number | null;
  /** USD per month for each location beyond `numbers`. */
  extraLocation: number;
  tagline: string;
  /** Short industry hint shown as a chip on the card. */
  bestFor: string;
  featured?: boolean;
  cta: string;
  highlights: string[];
};

/** Annual billing is billed yearly at this discount off the monthly rate. */
export const ANNUAL_DISCOUNT = 0.2;
/** Fallback add-on price per extra number/location. */
export const EXTRA_LOCATION_PRICE = 20;
/** Average call length used to turn minutes into a friendlier "calls" estimate. */
export const AVG_CALL_MINUTES = 2;
/** Above these thresholds we steer the visitor to Enterprise instead of a metered plan. */
export const ENTERPRISE_LOCATIONS = 10;
export const ENTERPRISE_MINUTES = 6000;

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 99,
    includedMinutes: 400,
    overage: 0.35,
    numbers: 1,
    extraLocation: 20,
    tagline: "For solo owners and single-chair businesses.",
    bestFor: "Salons · Solo agents · Food trucks",
    cta: "Start free trial",
    highlights: [
      "400 AI call minutes / month",
      "1 phone number & location",
      "Appointment booking & FAQs",
      "Call summaries by text & email",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 299,
    includedMinutes: 1500,
    overage: 0.25,
    numbers: 1,
    extraLocation: 20,
    tagline: "For busy single-location businesses.",
    bestFor: "Clinics · Restaurants · Salons",
    featured: true,
    cta: "Start free trial",
    highlights: [
      "1,500 AI call minutes / month",
      "Inbound calls + automated reminders",
      "Calendar & CRM integrations",
      "Call transfers & after-hours routing",
      "Recordings, transcripts & analytics",
      "Priority email & chat support",
    ],
  },
  {
    id: "multi",
    name: "Multi-Location",
    monthly: 699,
    includedMinutes: 4000,
    overage: 0.18,
    numbers: 5,
    extraLocation: 20,
    tagline: "For owners running 2–10 locations.",
    bestFor: "Small chains & franchises",
    cta: "Start free trial",
    highlights: [
      "4,000 pooled minutes across locations",
      "Up to 5 numbers & locations",
      "Outbound win-back & review campaigns",
      "Live call monitoring & QA scoring",
      "Team seats & role permissions",
      "Pooled usage across every location",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: null,
    includedMinutes: null,
    overage: null,
    numbers: null,
    extraLocation: 0,
    tagline: "For 10+ locations or high call volume.",
    bestFor: "Regional chains & franchises",
    cta: "Talk to sales",
    highlights: [
      "Unlimited minutes & locations",
      "SSO / SAML & SCIM provisioning",
      "Custom voices & data residency",
      "HIPAA BAA & audit logs",
      "Dedicated success manager",
      "99.99% uptime SLA",
    ],
  },
];

export const ENTERPRISE = PLANS.find((plan) => plan.id === "enterprise")!;

/* -------------------------------------------------------------------------- */
/*  Pricing helpers                                                           */
/* -------------------------------------------------------------------------- */

/** Monthly rate after the annual discount, rounded to the nearest $10. */
export function monthlyPrice(monthly: number, annual: boolean) {
  return annual
    ? Math.round((monthly * (1 - ANNUAL_DISCOUNT)) / 10) * 10
    : monthly;
}

/** How much a visitor keeps per month by paying annually. */
export function annualSavings(monthly: number) {
  return monthly - monthlyPrice(monthly, true);
}

export function formatUSD(value: number, fractionDigits = 0) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

export function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

/* -------------------------------------------------------------------------- */
/*  Estimator                                                                 */
/* -------------------------------------------------------------------------- */

export type Estimate = {
  plan: Plan;
  /** Base plan cost after any annual discount. */
  base: number;
  /** Number of locations beyond what the plan includes. */
  extraLocations: number;
  extraLocationCost: number;
  /** Minutes beyond what the plan includes. */
  overageMinutes: number;
  overageCost: number;
  total: number;
};

export function estimatePlan(
  plan: Plan,
  minutes: number,
  locations: number,
  annual: boolean,
): Estimate {
  const base = plan.monthly == null ? 0 : monthlyPrice(plan.monthly, annual);
  const includedNumbers = plan.numbers ?? locations;
  const extraLocations = Math.max(0, locations - includedNumbers);
  const extraLocationCost =
    extraLocations * (plan.extraLocation || EXTRA_LOCATION_PRICE);
  const overageMinutes = Math.max(0, minutes - (plan.includedMinutes ?? minutes));
  const overageCost = overageMinutes * (plan.overage ?? 0);

  return {
    plan,
    base,
    extraLocations,
    extraLocationCost,
    overageMinutes,
    overageCost,
    total: base + extraLocationCost + overageCost,
  };
}

export type Recommendation =
  | { kind: "plan"; estimate: Estimate }
  | { kind: "enterprise"; reason: string };

/** Cheapest metered plan for the given usage, or an Enterprise steer. */
export function recommendPlan(
  minutes: number,
  locations: number,
  annual: boolean,
): Recommendation {
  if (locations > ENTERPRISE_LOCATIONS) {
    return {
      kind: "enterprise",
      reason: `Running ${locations} locations? Volume pricing is cheaper than stacking metered plans.`,
    };
  }
  if (minutes > ENTERPRISE_MINUTES) {
    return {
      kind: "enterprise",
      reason: `${formatNumber(minutes)} minutes a month is past our metered plans — let's build you a custom rate.`,
    };
  }

  let best: Estimate | null = null;
  for (const plan of PLANS) {
    if (plan.monthly == null) continue;
    const estimate = estimatePlan(plan, minutes, locations, annual);
    if (!best || estimate.total < best.total) best = estimate;
  }

  return { kind: "plan", estimate: best! };
}

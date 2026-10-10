export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      {/* seamless looping cool gradient */}
      <div className="gradient-loop absolute inset-0" />

      {/* soft haze overlay for colour depth */}
      <div className="haze-mesh animate-haze absolute -inset-[20%] opacity-40" />

      {/* slow hairline grid */}
      <div className="bg-grid animate-grid-pan absolute inset-0 opacity-22" />

      {/* depth vignette keeps edges calm and text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_24%,rgba(5,5,8,0.78)_100%)]" />
    </div>
  );
}

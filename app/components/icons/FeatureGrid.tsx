export function FeatureGrid() {
  return (
    <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
      <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.4"/>
      <circle cx="44" cy="20" r="6" fill="currentColor" opacity="0.5"/>
      <circle cx="20" cy="44" r="6" fill="currentColor" opacity="0.6"/>
      <circle cx="44" cy="44" r="6" fill="currentColor" opacity="0.7"/>
      <line x1="26" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <line x1="20" y1="26" x2="20" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

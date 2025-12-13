export function LiveDashboard() {
  return (
    <svg className="w-full h-40 text-cyan-400" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="300" height="180" fill="url(#smallGrid)" />
      <rect x="10" y="10" width="80" height="60" rx="3" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1"/>
      <line x1="15" y1="20" x2="85" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <line x1="20" y1="35" x2="30" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <line x1="32" y1="50" x2="42" y2="35" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
      <line x1="44" y1="35" x2="54" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
      <rect x="100" y="10" width="80" height="60" rx="3" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1"/>
      <line x1="105" y1="20" x2="175" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <circle cx="130" cy="45" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <path d="M130 30L145 45L130 60" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <rect x="190" y="10" width="100" height="60" rx="3" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1"/>
      <line x1="195" y1="20" x2="285" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <rect x="200" y="30" width="12" height="35" fill="currentColor" opacity="0.3" rx="1"/>
      <rect x="218" y="20" width="12" height="45" fill="currentColor" opacity="0.5" rx="1"/>
      <rect x="236" y="35" width="12" height="30" fill="currentColor" opacity="0.4" rx="1"/>
      <rect x="254" y="15" width="12" height="50" fill="currentColor" opacity="0.6" rx="1"/>
      <rect x="10" y="80" width="280" height="90" rx="3" fill="currentColor" opacity="0.02" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="15" y1="90" x2="285" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <circle cx="50" cy="130" r="8" fill="currentColor" opacity="0.4"/>
      <circle cx="100" cy="130" r="8" fill="currentColor" opacity="0.5"/>
      <circle cx="150" cy="130" r="8" fill="currentColor" opacity="0.6"/>
      <circle cx="200" cy="130" r="8" fill="currentColor" opacity="0.4"/>
      <circle cx="250" cy="130" r="8" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

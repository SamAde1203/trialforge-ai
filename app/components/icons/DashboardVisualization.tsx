export function DashboardVisualization() {
  return (
    <svg className="w-full h-32 text-cyan-400" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="90" height="50" rx="4" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
      <rect x="100" y="10" width="90" height="50" rx="4" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
      <rect x="10" y="65" width="180" height="45" rx="4" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="2"/>
      <line x1="20" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="20" y1="38" x2="80" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <line x1="20" y1="46" x2="60" y2="46" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <line x1="110" y1="30" x2="140" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="110" y1="38" x2="180" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <line x1="110" y1="46" x2="160" y2="46" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <circle cx="50" cy="85" r="8" fill="currentColor" opacity="0.3"/>
      <circle cx="100" cy="85" r="8" fill="currentColor" opacity="0.3"/>
      <circle cx="150" cy="85" r="8" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}

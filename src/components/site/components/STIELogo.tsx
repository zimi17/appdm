export function STIELogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main circle */}
      <circle cx="20" cy="20" r="18" fill="#1a1a1a" stroke="#000" strokeWidth="2"/>
      
      {/* STIE Letters */}
      <text x="20" y="15" textAnchor="middle" className="fill-white text-[8px] font-bold">
        STIE
      </text>
      
      {/* Dwimulya */}
      <text x="20" y="25" textAnchor="middle" className="fill-white text-[6px] font-medium">
        DWIMULYA
      </text>
      
      {/* Decorative elements */}
      <circle cx="8" cy="12" r="1" fill="#ffd700"/>
      <circle cx="32" cy="12" r="1" fill="#ffd700"/>
      <rect x="18" y="28" width="4" height="2" fill="#ffd700"/>
    </svg>
  )
}
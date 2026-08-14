// About Illutsration component created by AI.
function Book({ cx, cy, angle }) {
  return (
    <g transform={`translate(${cx}, ${cy}) rotate(${angle})`}>
      <g style={{ animation: 'gentle-float 4s ease-in-out infinite' }}>
        {/* page stack, offset slightly to suggest depth/thickness */}
        <path d="M -40,-10 L -2,-20 L -2,20 L -40,30 Z" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
        <path d="M 40,-10 L 2,-20 L 2,20 L 40,30 Z" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />

        {/* covers/top pages */}
        <path d="M -38,-14 L -2,-24 L -2,16 L -38,26 Z" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M 38,-14 L 2,-24 L 2,16 L 38,26 Z" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.5" />

        {/* text lines, left page */}
        <line x1="-32" y1="-11" x2="-8" y2="-17" stroke="#22d3ee" strokeWidth="1" opacity="0.55" />
        <line x1="-32" y1="-3" x2="-8" y2="-9" stroke="#22d3ee" strokeWidth="1" opacity="0.55" />
        <line x1="-32" y1="5" x2="-8" y2="-1" stroke="#22d3ee" strokeWidth="1" opacity="0.55" />
        <line x1="-32" y1="13" x2="-8" y2="7" stroke="#22d3ee" strokeWidth="1" opacity="0.55" />

        {/* text lines, right page */}
        <line x1="8" y1="-17" x2="32" y2="-11" stroke="#22d3ee" strokeWidth="1" opacity="0.55" />
        <line x1="8" y1="-9" x2="32" y2="-3" stroke="#22d3ee" strokeWidth="1" opacity="0.55" />
        <line x1="8" y1="-1" x2="32" y2="5" stroke="#22d3ee" strokeWidth="1" opacity="0.55" />
        <line x1="8" y1="7" x2="32" y2="13" stroke="#22d3ee" strokeWidth="1" opacity="0.55" />

        {/* spine */}
        <line x1="0" y1="-24" x2="0" y2="16" stroke="#22d3ee" strokeWidth="1.5" />
      </g>
    </g>
  );
}

function AboutIllustration({ width = 340, height = 230 }) {
  return (
    <svg viewBox="0 0 320 220" width={width} height={height}>
      {/* Laptop */}
      <g style={{ animation: 'gentle-float 4s ease-in-out infinite', animationDelay: '0.3s' }}>
        <rect x={118} y={60} width={84} height={56} rx={4} fill="#1e293b" stroke="#22d3ee" strokeWidth="2" />
        <rect x={126} y={68} width={68} height={4} rx={2} fill="#22d3ee" opacity="0.6" />
        <rect x={126} y={78} width={50} height={4} rx={2} fill="#22d3ee" opacity="0.4" />
        <rect x={126} y={88} width={58} height={4} rx={2} fill="#22d3ee" opacity="0.5" />
        <path d="M 106,116 L 214,116 L 202,128 L 118,128 Z" fill="#334155" stroke="#22d3ee" strokeWidth="1.5" />
      </g>

      {/* Books, either side, slightly below the laptop */}
      <Book cx={55} cy={155} angle={-12} />
      <Book cx={265} cy={155} angle={12} />
    </svg>
  );
}

export default AboutIllustration;
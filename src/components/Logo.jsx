import React from 'react';

export default function Logo({ light = false, className = "h-16" }) {
  const primaryColor = light ? '#ffffff' : '#16233b';
  const secondaryColor = '#c39b48';
  const subtitleColor = light ? '#cbd5e1' : '#6c6757';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 120"
        role="img"
        aria-label="Capital Edge Accounting"
        className="h-full w-auto"
      >
        {/* C with a sharp diagonal cut */}
        <g transform="translate(8,12)">
          <path
            d="M84 8 A40 40 0 1 0 84 88 L66 70 A23 23 0 1 1 66 26 Z"
            fill={primaryColor}
          />
          {/* the sliced 'edge' */}
          <path
            d="M84 8 L66 26 L66 70 L84 88 L84 56 L60 48 L84 40 Z"
            fill={secondaryColor}
          />
        </g>
        <text x="118" y="52" className="wm" fontFamily="Archivo, sans-serif" fontWeight="800">
          <tspan className="a" fontSize="30" fill={primaryColor}>CAPITAL</tspan>
        </text>
        <text x="118" y="84" className="wm" fontFamily="Archivo, sans-serif" fontWeight="800">
          <tspan className="b" fontSize="30" fill={primaryColor}>EDGE</tspan>
        </text>
        <line x1="208" y1="63" x2="300" y2="63" stroke={secondaryColor} strokeWidth="2"></line>
        <text
          x="208"
          y="80"
          fontFamily="Archivo, sans-serif"
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="3.2"
          fill={subtitleColor}
        >
          ACCOUNTING
        </text>
      </svg>
    </div>
  );
}



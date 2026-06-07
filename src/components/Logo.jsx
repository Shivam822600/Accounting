import React from 'react';

export default function Logo({ light = false, className = "h-12" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo Icon: Abstract Geometric Growth + Letter C/E Monogram */}
      <svg 
        className="h-full w-auto object-contain" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Modern Diamond / Shield grid background */}
        <path 
          d="M50 5L95 27.5V72.5L50 95L5 72.5V27.5L50 5Z" 
          fill={light ? "rgba(255, 255, 255, 0.05)" : "rgba(12, 27, 51, 0.03)"} 
          stroke={light ? "rgba(255, 255, 255, 0.15)" : "rgba(12, 27, 51, 0.1)"} 
          strokeWidth="2"
        />
        
        {/* Dynamic Growth / Ascending Edge bars */}
        <path 
          d="M30 65V50C30 47.7909 31.7909 46 34 46H42C44.2091 46 46 47.7909 46 50V65" 
          fill={light ? "#34D399" : "#10B981"} /* Mint / Green representing growth */
        />
        <path 
          d="M54 65V35C54 32.7909 55.7909 31 58 31H66C68.2091 31 70 32.7909 70 35V65" 
          fill={light ? "#FBBF24" : "#D4AF37"} /* Gold representing capital/wealth */
        />
        
        {/* Swooping 'Edge' ribbon that curves up like a chart arrow */}
        <path 
          d="M20 65C30 55 45 42 60 40L75 35" 
          stroke={light ? "#FFFFFF" : "#0C1B33"} 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <path 
          d="M65 28L78 33L73 46" 
          stroke={light ? "#FFFFFF" : "#0C1B33"} 
          strokeWidth="5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <span className={`font-extrabold tracking-tight text-xl leading-none ${light ? 'text-white' : 'text-navy'}`}>
            Capital <span className={light ? 'text-gold' : 'text-navy'}>Edge</span>
          </span>
        </div>
        <span className={`text-[10px] font-bold tracking-[0.25em] uppercase mt-1 leading-none ${light ? 'text-white/60' : 'text-slate-500'}`}>
          Accounting
        </span>
      </div>
    </div>
  );
}

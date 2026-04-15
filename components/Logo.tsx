import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', dark = false }) => {
  const textColor = dark ? '#0F172A' : '#FFFFFF';

  return (
    <svg viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Icon - rounded square with droplet */}
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect x="0" y="2" width="32" height="32" rx="9" fill="url(#logoGrad)" />
      {/* Water droplet */}
      <path d="M16 10C16 10 10.5 17 10.5 20.5C10.5 23.5 12.9 26 16 26C19.1 26 21.5 23.5 21.5 20.5C21.5 17 16 10 16 10Z" fill="white" fillOpacity="0.95" />

      {/* Text */}
      <text x="40" y="27" fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" fontWeight="800" fontSize="26" letterSpacing="-0.5" fill={textColor}>
        Purafy
      </text>
    </svg>
  );
};

export default Logo;

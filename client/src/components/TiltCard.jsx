import React, { useState, useRef } from 'react';

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glowStyle, setGlowStyle] = useState({ opacity: 0, left: '0px', top: '0px' });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    setIsMoving(true);

    // Get card bounding rectangle
    const rect = card.getBoundingClientRect();
    
    // Relative mouse position inside the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates to ranges between -0.5 and 0.5
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    // Set maximum tilt angles (degrees)
    const maxTilt = 12;
    const rotateX = -normalizedY * maxTilt;
    const rotateY = normalizedX * maxTilt;

    // Apply 3D tilt transform (snappy, no scale lag)
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
    
    // Update glow spot coordinates and visibility
    setGlowStyle({
      opacity: 1,
      left: `${x}px`,
      top: `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setIsMoving(false);
    // Reset transforms smoothly with custom cubic-bezier swing back
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlowStyle({ opacity: 0, left: '0px', top: '0px' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isMoving 
          ? 'none' // Zero lag during active tracking
          : 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
        willChange: 'transform',
      }}
      className={`relative overflow-hidden glass-panel rounded-2xl border border-white/5 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_12px_40px_rgba(0,210,255,0.12)] ${className}`}
    >
      {/* Premium Multi-Layer Dynamic Shine Glow Overlay */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-opacity duration-300"
        style={{
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(0,210,255,0.15) 0%, rgba(155,81,224,0.06) 50%, transparent 100%)',
          opacity: glowStyle.opacity,
          left: glowStyle.left,
          top: glowStyle.top,
          willChange: 'left, top, opacity',
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;

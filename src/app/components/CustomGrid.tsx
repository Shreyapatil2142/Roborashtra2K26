"use client";

import React, { PropsWithChildren } from "react";

interface CustomGridProps extends PropsWithChildren {
  color?: string; // neon color (hex)
  strokeWidth?: number;
  drawSpeed?: number; // seconds
  pulse?: boolean;
  scan?: boolean;
  className?: string;
}

const CustomGrid: React.FC<CustomGridProps> = ({
  children,
  color = "#00E8FF",
  strokeWidth = 2,
  drawSpeed = 2.4,
  pulse = true,
  scan = true,
  className = "",
}) => {
  // Large dash length chosen to comfortably cover the main border length
  const mainDash = 6200;
  const cornerDash = 1400;

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* SVG frame fills container */}
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Sci-Fi Frame"
      >
        <defs>
          {/* glow filter */}
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="14" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.9"
              result="tint"
            />
          </filter>

          {/* soft inner glow (for subtle neon halo) */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="g" />
            <feMerge>
              <feMergeNode in="g" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* scanline gradient */}
          <linearGradient id="scanGrad" x1="0" x2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="45%" stopColor={color} stopOpacity="0.18" />
            <stop offset="55%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer main rounded rectangle — drawn animation */}
        <g filter="url(#neonGlow)">
          <rect
            x="28"
            y="28"
            width="1864"
            height="1024"
            rx="28"
            ry="28"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{
              strokeDasharray: mainDash,
              strokeDashoffset: mainDash,
              animation: `drawMain ${drawSpeed}s ease-in-out forwards`,
              vectorEffect: "non-scaling-stroke",
            }}
            className="sci-main-border"
          />
        </g>

        {/* Decorative corner & edge details — symmetrical, slightly optimized */}
        <g
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#softGlow)"
          style={{
            vectorEffect: "non-scaling-stroke",
          }}
        >
          {/* Top-left cluster */}
          <g style={{ animation: `drawCorner ${drawSpeed * 0.9}s ease-in-out forwards` }}>
            <path
              d="M68 120 L260 120" // top horizontal short
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animationDelay: `${drawSpeed * 0.12}s`,
              }}
            />
            <path
              d="M68 120 L68 260"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animationDelay: `${drawSpeed * 0.14}s`,
              }}
            />
            <path
              d="M84 276 L156 220 L220 220"
              style={{
                strokeDasharray: 320,
                strokeDashoffset: 320,
                animationDelay: `${drawSpeed * 0.2}s`,
              }}
            />
          </g>

          {/* Top-right cluster */}
          <g style={{ transformOrigin: "center", animation: `drawCorner ${drawSpeed * 0.9}s ease-in-out forwards` }}>
            <path
              d="M1860 120 L1668 120"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animationDelay: `${drawSpeed * 0.12}s`,
              }}
            />
            <path
              d="M1860 120 L1860 260"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animationDelay: `${drawSpeed * 0.14}s`,
              }}
            />
            <path
              d="M1804 276 L1732 220 L1668 220"
              style={{
                strokeDasharray: 320,
                strokeDashoffset: 320,
                animationDelay: `${drawSpeed * 0.2}s`,
              }}
            />
          </g>

          {/* Bottom-left cluster */}
          <g style={{ animation: `drawCorner ${drawSpeed * 0.9}s ease-in-out forwards` }}>
            <path
              d="M68 960 L68 820"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animationDelay: `${drawSpeed * 0.12}s`,
              }}
            />
            <path
              d="M68 960 L260 960"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animationDelay: `${drawSpeed * 0.14}s`,
              }}
            />
            <path
              d="M84 820 L156 880 L220 880"
              style={{
                strokeDasharray: 320,
                strokeDashoffset: 320,
                animationDelay: `${drawSpeed * 0.2}s`,
              }}
            />
          </g>

          {/* Bottom-right cluster */}
          <g style={{ animation: `drawCorner ${drawSpeed * 0.9}s ease-in-out forwards` }}>
            <path
              d="M1860 960 L1860 820"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animationDelay: `${drawSpeed * 0.12}s`,
              }}
            />
            <path
              d="M1860 960 L1668 960"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animationDelay: `${drawSpeed * 0.14}s`,
              }}
            />
            <path
              d="M1804 820 L1732 880 L1668 880"
              style={{
                strokeDasharray: 320,
                strokeDashoffset: 320,
                animationDelay: `${drawSpeed * 0.2}s`,
              }}
            />
          </g>

          {/* Small horizontal ticks along bottom center (like your PNG) */}
          <g style={{ animation: `drawCorner ${drawSpeed * 0.95}s ease-in-out forwards` }}>
            <path
              d="M760 1004 L820 1004"
              style={{ strokeDasharray: 120, strokeDashoffset: 120, animationDelay: `${drawSpeed * 0.28}s` }}
            />
            <path
              d="M860 1004 L920 1004"
              style={{ strokeDasharray: 120, strokeDashoffset: 120, animationDelay: `${drawSpeed * 0.32}s` }}
            />
            <path
              d="M980 1004 L1040 1004"
              style={{ strokeDasharray: 120, strokeDashoffset: 120, animationDelay: `${drawSpeed * 0.36}s` }}
            />
          </g>
        </g>

        {/* small accent circles / nodes */}
        <g fill={color} opacity="0.95" style={{ filter: `drop-shadow(0 0 6px ${color})` }}>
          <circle cx="70" cy="600" r="8" />
          <circle cx="1850" cy="600" r="8" />
          <circle cx="960" cy="60" r="6" />
        </g>

        {/* scan beam (optional) */}
        {scan && (
          <rect
            x="-1920"
            y="0"
            width="1920"
            height="1080"
            fill="url(#scanGrad)"
            style={{
              opacity: 0.6,
              animation: `scanMove 6s linear infinite`,
              mixBlendMode: "screen",
            }}
          />
        )}
      </svg>

      {/* overlay glow/pulse using an invisible div to create inset neon aura */}
      <div
        aria-hidden
        className={`absolute inset-0 pointer-events-none`}
        style={{
          boxShadow: pulse
            ? `inset 0 0 28px ${color}40, 0 0 30px ${color}80`
            : `inset 0 0 12px ${color}30`,
          animation: pulse ? `pulseGlow 3.2s ease-in-out infinite` : undefined,
        }}
      />

      {/* content area (left with padding so the frame doesn't overlap content) */}
      <div
        className="relative z-10"
        style={{
          width: "100%",
          height: "100%",
          padding: "56px 56px", // avoid frame inner edges
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>

      {/* component-scoped animations */}
      <style jsx>{`
        @keyframes drawMain {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawCorner {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: inset 0 0 18px ${color}30, 0 0 20px ${color}60;
          }
          50% {
            box-shadow: inset 0 0 40px ${color}70, 0 0 50px ${color}90;
          }
          100% {
            box-shadow: inset 0 0 18px ${color}30, 0 0 20px ${color}60;
          }
        }

        @keyframes scanMove {
          0% {
            transform: translateX(-1920px);
          }
          100% {
            transform: translateX(1920px);
          }
        }

        /* Additional safety: make strokes crisp on high DPI */
        .sci-main-border {
          shape-rendering: geometricPrecision;
        }

        /* animate each decorative path's strokeDashoffset via the inline style defined above */
        /* (we rely on per-element inline animation delay to create cascading drawing) */
      `}</style>
    </div>
  );
};

export default CustomGrid;

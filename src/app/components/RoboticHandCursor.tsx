"use client"
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export function RoboticHandCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [idleTwitch, setIdleTwitch] = useState(0);
  const [wristRotation, setWristRotation] = useState(0);
  const [fingerTwitches, setFingerTwitches] = useState([0, 0, 0, 0, 0]);
  const [breathingScale, setBreathingScale] = useState(1);
  const [clickFlash, setClickFlash] = useState(0);
  const [trailParticles, setTrailParticles] = useState<TrailParticle[]>([]);
  const [energyFlow, setEnergyFlow] = useState(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const moveTimeoutRef = useRef<NodeJS.Timeout>(setTimeout(() => {}, 150));
  const idleTimeRef = useRef(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const particleIdRef = useRef(0);

  // Track movement to detect when cursor is idle
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      
      // Create trail particles when moving
      if (Math.abs(newPos.x - lastPositionRef.current.x) > 3 || 
          Math.abs(newPos.y - lastPositionRef.current.y) > 3) {
        const newParticle: TrailParticle = {
          id: particleIdRef.current++,
          x: lastPositionRef.current.x,
          y: lastPositionRef.current.y,
          opacity: 0.8,
          scale: 1,
        };
        setTrailParticles((prev) => [...prev.slice(-8), newParticle]);
      }
      
      // Detect movement
      const moved = Math.abs(newPos.x - lastPositionRef.current.x) > 1 || 
                    Math.abs(newPos.y - lastPositionRef.current.y) > 1;
      
      if (moved) {
        setIsMoving(true);
        idleTimeRef.current = 0;
        
        clearTimeout(moveTimeoutRef.current);
        moveTimeoutRef.current = setTimeout(() => {
          setIsMoving(false);
        }, 150);
      }
      
      lastPositionRef.current = newPos;
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.onclick !== null ||
                           target.style.cursor === 'pointer' ||
                           target.closest('button, a, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      setClickFlash(1);
      setTimeout(() => setClickFlash(0), 200);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(moveTimeoutRef.current);
    };
  }, []);

  // Advanced animation frame for all continuous animations
  useAnimationFrame((time) => {
    // Energy flow animation (continuous)
    setEnergyFlow((time / 1000) % 2);
    
    // Fade out trail particles
    setTrailParticles((prev) => 
      prev
        .map((p) => ({ ...p, opacity: p.opacity - 0.02, scale: p.scale - 0.015 }))
        .filter((p) => p.opacity > 0)
    );
    
    if (!isMoving && !isClicking && !isHovering) {
      idleTimeRef.current += 0.016;
      
      // Breathing animation (always active when idle)
      setBreathingScale(1 + Math.sin(time / 1500) * 0.02);
      
      // Idle twitching after 2 seconds
      if (idleTimeRef.current > 2) {
        setIdleTwitch(Math.sin(time / 500) * 2 + Math.cos(time / 300) * 1.5);
        setWristRotation(Math.sin(time / 800) * 3 + Math.cos(time / 1200) * 2);
        
        setFingerTwitches([
          Math.sin(time / 600) * 1.5,
          Math.sin(time / 450) * 2,
          Math.sin(time / 550) * 1.8,
          Math.sin(time / 650) * 1.6,
          Math.sin(time / 500) * 1.4,
        ]);
      }
    } else {
      setIdleTwitch(0);
      setWristRotation(0);
      setFingerTwitches([0, 0, 0, 0, 0]);
      setBreathingScale(1);
      idleTimeRef.current = 0;
    }
  });
 
 
  // Contextual finger positions - shape morphing
  const getFingerRotation = () => {
    if (isClicking) return 50; // Closed fist
    if (isHovering) return 28; // Pointing/gripping gesture
    if (isMoving) return -12; // Open palm
    return 0; // Relaxed position
  };

  const baseFingerRotation = getFingerRotation();
  const fingerRotation = baseFingerRotation + idleTwitch;

  return (
    <>
      {/* Trail particles with electric pulse effect */}
      {trailParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%) scale(${particle.scale})`,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-cyan-400 blur-sm" style={{ opacity: particle.opacity }} />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-blue-500 blur-md animate-pulse" style={{ opacity: particle.opacity * 0.5 }} />
        </motion.div>
      ))}

      {/* Holographic ring effect when hovering */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <motion.div
            className="absolute rounded-full border-2 border-cyan-400/40"
            style={{
              width: 100,
              height: 100,
              left: -50,
              top: -50,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.3, 0.6],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full border-2 border-blue-400/30"
            style={{
              width: 80,
              height: 80,
              left: -40,
              top: -40,
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Click flash effect */}
      {clickFlash > 0 && (
        <motion.div
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <motion.div
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: 60,
              height: 60,
              left: -30,
              top: -30,
            }}
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>
      )}

      {/* Main robotic hand */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-normal"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: (isClicking ? 0.92 : isHovering ? 1.08 : 1) * breathingScale,
          rotate: idleTwitch * 0.5 + wristRotation * 0.3,
        }}
        transition={{ 
          type: "spring", 
          stiffness: isClicking ? 600 : 450, 
          damping: isClicking ? 35 : 28,
        }}
      >
        {/* Magnetic field effect when hovering */}
        {isHovering && (
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 120,
              height: 120,
              left: -60,
              top: -60,
              background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'translate(-30px, -20px)' }}
          animate={{
            rotateZ: wristRotation,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <defs>
            {/* Enhanced metallic gradient */}
            <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9CADC3" />
              <stop offset="25%" stopColor="#DFE9F3" />
              <stop offset="50%" stopColor="#B5C5D8" />
              <stop offset="75%" stopColor="#8B9BB8" />
              <stop offset="100%" stopColor="#6B7D9F" />
            </linearGradient>
            
            <linearGradient id="metallicDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A4556" />
              <stop offset="50%" stopColor="#556B8A" />
              <stop offset="100%" stopColor="#2A3442" />
            </linearGradient>

            {/* Vibrant blue glow */}
            <radialGradient id="blueGlow">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
              <stop offset="40%" stopColor="#00B8FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0088FF" stopOpacity="0" />
            </radialGradient>

            {/* Animated energy flow gradient */}
            <linearGradient id="energyFlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.2">
                <animate attributeName="offset" values="0;1;0" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#00FFFF" stopOpacity="1">
                <animate attributeName="offset" values="0.5;1.5;0.5" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#0099FF" stopOpacity="0.2">
                <animate attributeName="offset" values="1;2;1" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>

            {/* Click flash gradient */}
            <radialGradient id="clickFlash">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={clickFlash} />
              <stop offset="50%" stopColor="#00FFFF" stopOpacity={clickFlash * 0.7} />
              <stop offset="100%" stopColor="#0099FF" stopOpacity="0" />
            </radialGradient>

            {/* Filters */}
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="3" stdDeviation="2.5" floodOpacity="0.6" />
            </filter>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Palm */}
          <motion.g filter="url(#shadow)">
            <path
              d="M 40 70 L 45 45 L 65 45 L 70 70 L 65 85 L 45 85 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
            />
            <path
              d="M 45 50 L 65 50 L 65 80 L 45 80 Z"
              fill="url(#metallicDark)"
              opacity="0.3"
            />
            
            {/* Energy flow lines with animated gradient */}
            <motion.line
              x1="47" y1="52" x2="47" y2="78"
              stroke="url(#energyFlow)"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="55" y1="52" x2="55" y2="78"
              stroke="url(#energyFlow)"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="63" y1="52" x2="63" y2="78"
              stroke="url(#energyFlow)"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Click flash overlay on palm */}
            {clickFlash > 0 && (
              <circle
                cx="55"
                cy="65"
                r="20"
                fill="url(#clickFlash)"
                opacity={clickFlash}
              />
            )}
            
            {/* Enhanced pulsing joint lights */}
            <motion.circle
              cx="48" cy="75" r="3"
              fill="url(#blueGlow)"
              filter="url(#strongGlow)"
              animate={{ 
                opacity: [0.7, 1, 0.7], 
                r: [3, 3.5, 3],
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="62" cy="75" r="3"
              fill="url(#blueGlow)"
              filter="url(#strongGlow)"
              animate={{ 
                opacity: [0.7, 1, 0.7], 
                r: [3, 3.5, 3],
              }}
              transition={{ duration: 1, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Thumb - contextual morphing */}
          <motion.g
            style={{ transformOrigin: '42px 65px' }}
            animate={{ rotate: (fingerRotation * (isHovering ? 0.4 : 0.7)) + fingerTwitches[0] }}
            transition={{ 
              type: "spring", 
              stiffness: isClicking ? 500 : 380, 
              damping: isClicking ? 30 : 22,
            }}
            filter="url(#shadow)"
          >
            <path
              d="M 35 65 L 42 60 L 42 72 L 35 70 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
            />
            <motion.line
              x1="38" y1="61" x2="38" y2="69"
              stroke="url(#energyFlow)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <motion.path
              d="M 25 60 L 35 65 L 35 70 L 25 67 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
              style={{ transformOrigin: '35px 65px' }}
              animate={{ rotate: (fingerRotation * 1.1) + fingerTwitches[0] * 1.2 }}
              transition={{ 
                type: "spring", 
                stiffness: isClicking ? 500 : 380, 
                damping: isClicking ? 30 : 22,
              }}
            />
            {clickFlash > 0 && (
              <circle cx="30" cy="63" r="8" fill="url(#clickFlash)" opacity={clickFlash * 0.6} />
            )}
            <motion.circle
              cx="35" cy="67" r="2.2"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.6, 1, 0.6],
                r: [2.2, 2.6, 2.2],
              }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Index finger - morphs to pointing when hovering */}
          <motion.g
            style={{ transformOrigin: '48px 45px' }}
            animate={{ rotate: (isHovering ? -5 : -fingerRotation * 0.95) + fingerTwitches[1] }}
            transition={{ 
              type: "spring", 
              stiffness: isClicking ? 520 : 400, 
              damping: isClicking ? 32 : 24,
            }}
            filter="url(#shadow)"
          >
            <path
              d="M 46 45 L 50 45 L 50 30 L 46 30 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
            />
            <motion.line
              x1="48" y1="44" x2="48" y2="31"
              stroke="url(#energyFlow)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <motion.circle
              cx="48" cy="30" r="2.2"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.6, 1, 0.6],
                r: [2.2, 2.7, 2.2],
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path
              d="M 46 30 L 50 30 L 50 18 L 48 15 L 46 18 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
              style={{ transformOrigin: '48px 30px' }}
              animate={{ rotate: (isHovering ? -8 : -fingerRotation * 1.3) + fingerTwitches[1] * 1.3 }}
              transition={{ 
                type: "spring", 
                stiffness: isClicking ? 540 : 420, 
                damping: isClicking ? 34 : 26,
              }}
            />
            {clickFlash > 0 && (
              <circle cx="48" cy="18" r="10" fill="url(#clickFlash)" opacity={clickFlash * 0.8} />
            )}
            <motion.circle
              cx="48" cy="18" r="1.8"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                r: [1.8, 2.3, 1.8],
              }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Middle finger */}
          <motion.g
            style={{ transformOrigin: '55px 45px' }}
            animate={{ rotate: (-fingerRotation * 0.98) + fingerTwitches[2] }}
            transition={{ 
              type: "spring", 
              stiffness: isClicking ? 520 : 400, 
              damping: isClicking ? 32 : 24,
            }}
            filter="url(#shadow)"
          >
            <path
              d="M 53 45 L 57 45 L 57 28 L 53 28 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
            />
            <motion.line
              x1="55" y1="44" x2="55" y2="29"
              stroke="url(#energyFlow)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <motion.circle
              cx="55" cy="28" r="2.2"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.6, 1, 0.6],
                r: [2.2, 2.7, 2.2],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path
              d="M 53 28 L 57 28 L 57 12 L 55 8 L 53 12 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
              style={{ transformOrigin: '55px 28px' }}
              animate={{ rotate: (-fingerRotation * 1.35) + fingerTwitches[2] * 1.4 }}
              transition={{ 
                type: "spring", 
                stiffness: isClicking ? 540 : 420, 
                damping: isClicking ? 34 : 26,
              }}
            />
            {clickFlash > 0 && (
              <circle cx="55" cy="12" r="10" fill="url(#clickFlash)" opacity={clickFlash * 0.8} />
            )}
            <motion.circle
              cx="55" cy="12" r="1.8"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                r: [1.8, 2.3, 1.8],
              }}
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Ring finger */}
          <motion.g
            style={{ transformOrigin: '62px 45px' }}
            animate={{ rotate: (-fingerRotation * 0.92) + fingerTwitches[3] }}
            transition={{ 
              type: "spring", 
              stiffness: isClicking ? 510 : 390, 
              damping: isClicking ? 31 : 23,
            }}
            filter="url(#shadow)"
          >
            <path
              d="M 60 45 L 64 45 L 64 32 L 60 32 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
            />
            <motion.line
              x1="62" y1="44" x2="62" y2="33"
              stroke="url(#energyFlow)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <motion.circle
              cx="62" cy="32" r="2.2"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.6, 1, 0.6],
                r: [2.2, 2.7, 2.2],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path
              d="M 60 32 L 64 32 L 64 18 L 62 15 L 60 18 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
              style={{ transformOrigin: '62px 32px' }}
              animate={{ rotate: (-fingerRotation * 1.25) + fingerTwitches[3] * 1.3 }}
              transition={{ 
                type: "spring", 
                stiffness: isClicking ? 530 : 410, 
                damping: isClicking ? 33 : 25,
              }}
            />
            {clickFlash > 0 && (
              <circle cx="62" cy="18" r="10" fill="url(#clickFlash)" opacity={clickFlash * 0.8} />
            )}
            <motion.circle
              cx="62" cy="18" r="1.8"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                r: [1.8, 2.3, 1.8],
              }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Pinky finger */}
          <motion.g
            style={{ transformOrigin: '68px 47px' }}
            animate={{ rotate: (-fingerRotation * 0.85) + fingerTwitches[4] }}
            transition={{ 
              type: "spring", 
              stiffness: isClicking ? 490 : 370, 
              damping: isClicking ? 29 : 21,
            }}
            filter="url(#shadow)"
          >
            <path
              d="M 67 47 L 70 47 L 70 36 L 67 36 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
            />
            <motion.line
              x1="68.5" y1="46" x2="68.5" y2="37"
              stroke="url(#energyFlow)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <motion.circle
              cx="68.5" cy="36" r="2"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.6, 1, 0.6],
                r: [2, 2.5, 2],
              }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path
              d="M 67 36 L 70 36 L 70 25 L 68.5 22 L 67 25 Z"
              fill="url(#metallic)"
              stroke="#2A3442"
              strokeWidth="1.5"
              style={{ transformOrigin: '68.5px 36px' }}
              animate={{ rotate: (-fingerRotation * 1.2) + fingerTwitches[4] * 1.25 }}
              transition={{ 
                type: "spring", 
                stiffness: isClicking ? 520 : 400, 
                damping: isClicking ? 32 : 24,
              }}
            />
            {clickFlash > 0 && (
              <circle cx="68.5" cy="25" r="8" fill="url(#clickFlash)" opacity={clickFlash * 0.8} />
            )}
            <motion.circle
              cx="68.5" cy="25" r="1.6"
              fill="url(#blueGlow)"
              filter="url(#glow)"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                r: [1.6, 2.1, 1.6],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Wrist connector with power indicators */}
          <motion.g 
            filter="url(#shadow)"
            animate={{
              rotateZ: wristRotation * 0.5,
            }}
            style={{ transformOrigin: '55px 90px' }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            <path
              d="M 43 85 L 67 85 L 65 95 L 45 95 Z"
              fill="url(#metallicDark)"
              stroke="#2A3442"
              strokeWidth="1.5"
            />
            <motion.rect
              x="47" y="87" width="5" height="3"
              fill="url(#blueGlow)"
              opacity={0.8}
              filter="url(#glow)"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.rect
              x="53" y="87" width="5" height="3"
              fill="url(#blueGlow)"
              opacity={0.8}
              filter="url(#glow)"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.rect
              x="59" y="87" width="5" height="3"
              fill="url(#blueGlow)"
              opacity={0.8}
              filter="url(#glow)"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>
        </motion.svg>
      </motion.div>
    </>
  );
}

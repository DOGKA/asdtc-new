import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Particle Sphere Component - ASDTC Cyan Theme
const ParticleSphere = ({ count = 5000, radius = 14 }) => {
  const pointsRef = useRef();
  const auraRef = useRef();
  const starsRef = useRef();
  
  // Mouse position for interaction
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  
  // Generate sphere positions
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sphereGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const positionAttribute = sphereGeometry.getAttribute('position');
    
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * positionAttribute.count);
      positions[i * 3] = positionAttribute.getX(idx) + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = positionAttribute.getY(idx) + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 2] = positionAttribute.getZ(idx) + (Math.random() - 0.5) * 0.5;
    }
    
    return positions;
  }, [count, radius]);
  
  // Generate floating star positions
  const starPositions = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return positions;
  }, []);
  
  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.targetX = (event.clientX - window.innerWidth / 2) * 0.0008;
      mouse.current.targetY = (event.clientY - window.innerHeight / 2) * 0.0008;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Animation frame
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth mouse following
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;
    
    if (pointsRef.current) {
      // Continuous rotation
      pointsRef.current.rotation.y += 0.002;
      pointsRef.current.rotation.x += 0.001;
      
      // Mouse interaction
      pointsRef.current.rotation.y += mouse.current.x * 0.03;
      pointsRef.current.rotation.x += mouse.current.y * 0.03;
      
      // Pulse effect
      const scale = 1 + Math.sin(time * 0.8) * 0.03;
      pointsRef.current.scale.set(scale, scale, scale);
    }
    
    if (auraRef.current) {
      // Opposite rotation for aura
      auraRef.current.rotation.y -= 0.001;
      auraRef.current.rotation.z += 0.0005;
      
      // Breathing effect
      const auraScale = 1 + Math.cos(time * 0.5) * 0.02;
      auraRef.current.scale.set(auraScale, auraScale, auraScale);
    }
    
    if (starsRef.current) {
      // Very slow star rotation
      starsRef.current.rotation.y += 0.0003;
    }
  });
  
  return (
    <>
      {/* Main Particle Sphere - ASDTC Cyan */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
      
      {/* Outer Aura Wireframe */}
      <Sphere ref={auraRef} args={[radius * 1.15, 48, 48]}>
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.04}
          wireframe
          side={THREE.DoubleSide}
        />
      </Sphere>
      
      {/* Second Aura Layer */}
      <Sphere args={[radius * 1.25, 32, 32]}>
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.02}
          wireframe
          side={THREE.DoubleSide}
        />
      </Sphere>
      
      {/* Floating Stars/Dust */}
      <Points ref={starsRef} positions={starPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.3}
        />
      </Points>
    </>
  );
};

// Camera Controller
const CameraController = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 28;
    camera.position.y = 2;
  }, [camera]);
  
  return null;
};

// Main Globe Component
const ParticleGlobe = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'transparent' }}
      >
        {/* Fog for depth */}
        <fog attach="fog" args={['#030508', 20, 60]} />
        
        {/* Ambient light */}
        <ambientLight intensity={0.5} />
        
        {/* Camera setup */}
        <CameraController />
        
        {/* Main particle sphere */}
        <ParticleSphere count={6000} radius={12} />
      </Canvas>
      
      {/* Vignette Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle at center, transparent 10%, #030508 100%)',
          opacity: 0.7,
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
};

export default ParticleGlobe;


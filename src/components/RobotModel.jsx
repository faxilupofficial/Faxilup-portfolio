import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import { useScroll as useFramerScroll } from 'framer-motion';
import * as THREE from 'three';

export default function RobotModel(props) {
  const group = useRef();
  
  const { scrollYProgress } = useFramerScroll();

  useFrame((state) => {
    if (!group.current) return;

    const scrollPos = scrollYProgress.get(); // 0 to 1

    // Idle floating animation
    const t = state.clock.getElapsedTime();
    const idleY = Math.sin(t * 2) * 0.1;

    // Position mapping
    const targetY = THREE.MathUtils.lerp(-1, 3, scrollPos * 2);
    const targetX = THREE.MathUtils.lerp(0, 2, scrollPos * 2);
    
    // Scale mapping
    const targetScale = THREE.MathUtils.lerp(1.5, 0.5, scrollPos * 2);

    // Rotation mapping
    const targetRotationY = THREE.MathUtils.lerp(0, Math.PI, scrollPos) + (t * 0.2);
    const targetRotationX = THREE.MathUtils.lerp(0.2, 0, scrollPos * 4);

    // Apply with damping
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY + idleY, 4, state.delta);
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 4, state.delta);
    group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, targetScale, 4, state.delta));
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotationY, 4, state.delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotationX, 4, state.delta);
  });

  return (
    <group ref={group} {...props}>
      <TorusKnot args={[1, 0.3, 128, 64]}>
        <MeshDistortMaterial 
          color="#8b5cf6" 
          envMapIntensity={2} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.8} 
          roughness={0.2} 
          distort={0.4} 
          speed={2} 
        />
      </TorusKnot>
    </group>
  );
}

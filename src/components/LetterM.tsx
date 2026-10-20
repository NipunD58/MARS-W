import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function MMesh() {
  const ref = useRef<THREE.Group>(null);
  const geo = useMemo(() => {
    const s = new THREE.Shape();
    const pts: [number, number][] = [
      [0, 0],
      [0.7, 0],
      [0.7, 2.7],
      [1.15, 2.7],
      [1.15, 0.5],
      [1.85, 0.5],
      [1.85, 2.7],
      [2.3, 2.7],
      [2.3, 0],
      [3, 0],
      [3, 3.1],
      [2.6, 3.5],
      [1.7, 3.5],
      [1.5, 3.25],
      [1.3, 3.5],
      [0.4, 3.5],
      [0, 3.1],
    ];
    s.moveTo(0, 0);
    pts.slice(1).forEach(([x, y]) => s.lineTo(x, y));
    const g = new THREE.ExtrudeGeometry(s, {
      depth: 0.7,
      bevelEnabled: true,
      bevelSize: 0.04,
      bevelThickness: 0.04,
      bevelSegments: 2,
    });
    g.center();
    return g;
  }, []);
  useFrame((state, dt) => {
    if (!ref.current) return;
    const tx = state.pointer.y * 0.3;
    const ty = -0.6 + state.pointer.x * 0.5;
    ref.current.rotation.x += (tx - ref.current.rotation.x) * (1 - Math.exp(-4 * dt));
    ref.current.rotation.y += (ty - ref.current.rotation.y) * (1 - Math.exp(-4 * dt));
  });
  return (
    <group ref={ref}>
      <mesh geometry={geo}>
        <meshBasicMaterial color="#ffffff" polygonOffset polygonOffsetFactor={1} />
        <Edges threshold={20} color="#111111" />
      </mesh>
    </group>
  );
}

export default function LetterM() {
  return (
    <Canvas camera={{ position: [0, 0.5, 11], fov: 40 }} dpr={[1, 2]}>
      <MMesh />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.8} />
    </Canvas>
  );
}

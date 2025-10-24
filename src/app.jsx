import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";

function Avatar() {
  const { scene, animations } = useGLTF("/avatar.glb");
  const { actions } = useAnimations(animations, scene);

  React.useEffect(() => {
    actions[Object.keys(actions)[0]]?.play(); // Play first animation
  }, [actions]);

  return (
    <group
      position={[0, -1, 0]}  // 👈 moves avatar down (Y axis)
      rotation={[0, Math.PI, 0]} // 👈 rotate to face camera
      scale={[1, 1, 1]}  // 👈 adjust avatar size
    >
      <primitive object={scene} />
    </group>
  );
}

export default function App() {
  return (
    <div
      style={{
        transform: "scale(0.8)",
        transformOrigin: "center",
        width: "100%",
        height: "100vh",
        background: "",
      }}
    >
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[6, 6, 6]} />
        <Avatar />
        <Environment preset="sunset" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

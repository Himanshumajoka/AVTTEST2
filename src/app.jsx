import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";

// Load GLB model
 function Avatar() {
  const { scene, animations } = useGLTF("/avatar.glb");
  const { actions } = useAnimations(animations, scene);

  React.useEffect(() => {
    actions[Object.keys(actions)[0]]?.play(); // plays the first animation
  }, [actions]);

  return <primitive object={scene} scale={2} />;
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Avatar />
        <Environment preset="sunset" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}



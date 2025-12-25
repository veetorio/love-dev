'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RoseInCube } from "./cubeAndRose";


export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 4], fov: 100 }} className="h-1/12 " >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />

            <RoseInCube />

            <OrbitControls/>
        </Canvas>
    );
}

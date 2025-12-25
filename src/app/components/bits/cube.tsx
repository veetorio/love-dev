'use client';

import { Text } from "@react-three/drei";
import * as THREE from "three";
export function BaseSheet() {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]} // deita o plano
            position={[0, -1.55, 0]}       // logo abaixo do cubo (3/2 = 1.5)
            receiveShadow
        >
            <planeGeometry args={[3, 3]} />

            <meshStandardMaterial
                color="#f8fafc"   // branco levemente quente
                roughness={0.9}
                metalness={0}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}
export function Cube() {
    return (
        <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <meshPhysicalMaterial
                color="#ffffff"
                transparent

                opacity={0.15}
                roughness={0}
                metalness={0}
                transmission={1}   // efeito vidro
                thickness={0.3}
                clearcoat={1}
            // side={THREE.BackSide} // 🔥 ESSENCIAL
            />
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(3, 3, 3)]} />
                <lineBasicMaterial
                    color="#ffffff"
                    linewidth={1}
                    transparent
                    opacity={0.6}
                />
            </lineSegments>
            <Text
                position={[0, -1.65, 0]} // levemente acima da folha para evitar Z-fighting
                rotation={[Math.PI / 2, 0, 0]} // mesma rotação da folha
                fontSize={0.090}
                color="#111"
                anchorX="center"
                anchorY="middle"

            >
                você é a melhor coisa que me aconteceu ❤️.
                senha é EqualsRose
            </Text>
        </mesh>
    );
}

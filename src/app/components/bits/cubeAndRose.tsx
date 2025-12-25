'use client';

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import  Rose  from "./rose";
import { BaseSheet, Cube } from "./cube";

export function RoseInCube() {
  const groupRef = useRef<Group>(null!);

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.4;
    // groupRef.current.rotation.x += delta * 0.2;
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]}   // centro da cena
    >
      <BaseSheet/>
      <Cube />
      <Rose x={0} y={-0.4} z={0}/>
      {/* <Rose x={4} y={-0.8} z={0}/> */}
    </group>
  );
}

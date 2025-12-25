'use client';

import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three-stdlib";

export default function Rose({ x , y , z} : { x : number, y : number, z : number }) {
    const object = useLoader(
        OBJLoader,
        "https://happy358.github.io/Images/Model/red_rose3.obj"
    );

    useEffect(() => {
        object.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;

                const material = new THREE.MeshStandardMaterial({
                    metalness: 0,
                    roughness: 0.8,
                    side: THREE.DoubleSide,
                });

                if (mesh.name === "rose") {
                    material.color.set("#006eff");
                } else if (mesh.name === "calyx") {
                    material.color.set("#009f55");
                } else if (mesh.name === "leaf1" || mesh.name === "leaf2") {
                    material.color.set("#009f55");
                }

                mesh.material = material;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                // mesh.scale.setScalar(0.3)
            }
        });
        
        object.scale.setScalar(0.01);      // 👈 valor típico pra OBJ
        object.position.set(x,y,z);
        object.rotation.set(0, 0, 0);
    }, [object,x,y,z]);

    return <primitive object={object} />;
}

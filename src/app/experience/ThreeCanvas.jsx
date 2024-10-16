/** @format */
'use client'

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import React from "react";

export default function ThreeCanvas({colorOne=null, colorTwo=null}) {

  return (
    <Canvas
      
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 2, 6],
      }}>
      <Experience colorOne={colorOne} colorTwo={colorTwo} />
    </Canvas>
  );
}

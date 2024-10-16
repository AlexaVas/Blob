/** @format */
"use client";

import { useFrame } from "@react-three/fiber";
import { useRef,useEffect, useState } from "react";

import Fluid from "./Fluid";

export default function Experience({colorOne,colorTwo}) {
  const fluidMaterialRef = useRef();
    const loaderRef = useRef({ start: false, load: 0 });

useEffect(()=>{

  const timerId = setTimeout(()=>{
loaderRef.current.start = true

  },150)

  return ()=> clearTimeout(timerId)

},[])


  const pointerEnter = (e) => {
    // Update the uPoint uniform when the pointer moves
    fluidMaterialRef.current.uniforms.uPoint.value = e.intersections[0].point

  };



  useFrame((state, delta) => {
    // Update the uTime uniform with the elapsed time
    if (fluidMaterialRef.current) {
      fluidMaterialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }

    if(loaderRef.current.start && loaderRef.current.load < 1 ){
       loaderRef.current.load = Math.min(loaderRef.current.load + (delta*0.3), 1);
     
       fluidMaterialRef.current.uniforms.uTransparency.value = loaderRef.current.load;
       
    }
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      

      <mesh  onPointerMove={pointerEnter} scale={2} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 60]} />
        <Fluid ref={fluidMaterialRef} uColorOne={colorOne} uColorTwo={colorTwo}/>
      </mesh>

    
    </>
  );
}
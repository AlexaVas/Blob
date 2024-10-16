/** @format */
"use client";
import fluidTextureFrag from "./shaders/fluidTexture/fragment.glsl";
import fluidTextureVer from "./shaders/fluidTexture/vertex.glsl";


import * as THREE from "three";
import { forwardRef, useMemo } from "react";

const Fluid = forwardRef(
  ({ uColorOne, uColorTwo }, ref) => {
    // Use useMemo to create and memoize the shader material
    const material = useMemo(() => {
      return new THREE.ShaderMaterial({
        uniforms: {
          uTime: new THREE.Uniform(0),
          uPoint: new THREE.Uniform(new THREE.Vector3(0, 0, 0)),
          uColorOne: new THREE.Uniform(new THREE.Color(uColorOne || "#E3A5C7")),
          uColorTwo: new THREE.Uniform(new THREE.Color(uColorTwo || "#694F8E")),
          uTransparency: new THREE.Uniform(0)
        },
        vertexShader: fluidTextureVer,
        fragmentShader: fluidTextureFrag,
        wireframe: false,
        transparent: true,
      });
    }, [ uColorOne, uColorTwo]);

    // Attach the material to the forwarded ref
    if (ref) ref.current = material;

    return <primitive object={material} attach="material" />;
  }
);

export default Fluid;

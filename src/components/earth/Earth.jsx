import React, { useRef, useState } from "react";
import "./earth.css";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html, PresentationControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { AiFillEnvironment } from "react-icons/ai";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";
import Hypertml from "../html/Hypertml";

const Earth = () => {
  const [hovered, setHover] = useState(false);
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 24;
    cloudsRef.current.rotation.y = elapsedTime / 48;
  });

  return (
    <>
      <pointLight color="#fbb859;" position={[2, 0, 5]} intensity={1.9} />
      <mesh position={[0.1, 3, 0]}>
        <Html className="climateChange">
          <AiFillEnvironment size={25} color="orange" />
          &nbsp;Climate change.
        </Html>
      </mesh>
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 2, Math.PI / 2]}
        azimuth={[-Math.PI / 1.4, Math.PI / 3]}
        position={[0, 0, 3]}
      >
        <mesh
          ref={cloudsRef}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
          scale={1.7}
        >
          <sphereGeometry args={[1.008, 24 * 2, 24 * 2]} />
          <meshPhongMaterial
            map={cloudsMap}
            opacity={0.3}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
            color={hovered ? "#ff7b00" : "white"}
          />
        </mesh>
        <mesh ref={earthRef} scale={1.7}>
          <sphereGeometry args={[1, 64 * 2, 64 * 2]} />
          <meshPhongMaterial specularMap={specularMap} />
          <meshStandardMaterial
            map={colorMap}
            normalMap={normalMap}
            metalness={0.4}
            roughness={0.7}
            color={hovered ? "#ff7b00" : "white"}
          />
        </mesh>
        <Hypertml />
      </PresentationControls>
      <Stars depth={90} count={10000} fade />
    </>
  );
};

export default Earth;

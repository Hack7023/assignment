import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function Display(props) {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Model data = {props.data}/>
          <OrbitControls  />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
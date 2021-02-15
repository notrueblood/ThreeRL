import { useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

export default function Index() {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  // For hover and mouse tracking.
  const [big, setBig] = useState(false);
  const [hovered, setHover] = useState(false);
  const [xy, setXY] = useState([0, 0]);

  return (
    <div className="main h-screen w-screen" ref={ref}>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        width={bounds.width}
        height={bounds.height}
      >
        <OrbitControls />
        <RoundedBox
          args={[1, 1, 1]} // Width, Height and Depth of the box
          radius={0.05} // Border-Radius of the box
          smoothness={4} // Optional, number of subdivisions
        >
          <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
        </RoundedBox>
      </Canvas>
    </div>
  );
}

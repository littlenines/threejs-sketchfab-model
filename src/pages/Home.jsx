import { Suspense, useState, useEffect, useCallback, useRef } from "react";
import { Preload, Stats, OrbitControls } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import CameraIntro from "../components/CameraIntro";
import House from "../models/House"
import Annotations from "../components/Annotations";

const Home = () => {
  const orbitControlsRef = useRef()
  const [selected, setSelected] = useState(null)

  const [houseProps, setHouseProps] = useState({
    scale: [0.035, 0.035, 0.035],
    position: [1, -27, -40],
    rotation: [0, 1.6, 0],
  });

  useEffect(() => {
    const handleDevice = () => {
      const scale = window.innerWidth < 768 ? [0.025, 0.025, 0.025] : [0.035, 0.035, 0.035];
      setHouseProps((prevProps) => ({ ...prevProps, scale }));
    };

    window.addEventListener("resize", handleDevice);
    handleDevice();

    return () => window.removeEventListener("resize", handleDevice);
  }, []);

  const handleMouseEvent = useCallback((event) => {
    if (event.target.localName === 'canvas') event.target.style.cursor = event.type === 'mousedown' ? 'grabbing' : 'grab';
    if (event.type === 'mousedown' && event.target.localName !== 'div') setSelected(null);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ near: 0.1, far: 1000 }}
              frameloop="demand"
              onMouseDown={handleMouseEvent}
              onMouseUp={handleMouseEvent}
      >
        <CameraIntro />
        <OrbitControls ref={orbitControlsRef} target={[1.2, -16, -43]} />
        <Stats />
        <House {...houseProps} />
        <Preload all />
        <Annotations controls={orbitControlsRef} selected={selected} setSelected={setSelected} />
      </Canvas>
    </Suspense>
  );
};

export default Home;

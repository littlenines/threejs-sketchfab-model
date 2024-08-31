import { memo, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const CameraIntro = () => {
  const zoomProgress = useRef(0);
  const [animationDone, setAnimationDone] = useState(false);
  const tolerance = 0.01;

  useFrame((state) => {
    if (!animationDone) {
      // Ease-out effect
      zoomProgress.current += (1 - zoomProgress.current) * 0.025;

      const initialPosition = [200, -10, 50];
      const targetPosition = [-1.2, -15, 10];

      const newPosition = initialPosition.map(
        (start, index) =>
          start + (targetPosition[index] - start) * zoomProgress.current
      );

      state.camera.position.set(...newPosition);
      state.camera.updateProjectionMatrix();

      if (zoomProgress.current >= 1 - tolerance) {
        setAnimationDone(true);
      }
    }
  });

  return null;
};

export default memo(CameraIntro);

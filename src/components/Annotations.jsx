import { useEffect, useState, useRef, useMemo, memo } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Vector3, Raycaster } from 'three';
import annotations from '../assets/data/annotations.json';
import style from '../styles/Annotations.module.scss';

const Annotations = ({ controls, selected, setSelected }) => {
    const { invalidate } = useThree();
    const [target, setTarget] = useState(null);
    const [opacities, setOpacities] = useState([]);
    const lerpSpeed = 0.037;
    const raycaster = useRef(new Raycaster());

    const isMobile = useMemo(() => window.innerWidth < 768, []);

    useEffect(() => { setOpacities(new Array(annotations.length).fill(1)); }, []);

    useFrame(({ scene, camera }) => {
        if (target) {
            const distanceToTarget = controls.current.target.distanceTo(target.lookAt);
            const distanceToCamPos = camera.position.distanceTo(target.camPos);

            controls.current.target.lerp(target.lookAt, lerpSpeed);
            camera.position.lerp(target.camPos, lerpSpeed);
            camera.updateProjectionMatrix();
            controls.current.update();

            if (distanceToTarget < 0.1 && distanceToCamPos < 0.1) setTarget(null);
        }

        annotations.forEach((annotation, index) => {
            const annotationPosition = new Vector3(
                isMobile ? annotation.lookAtMobile.x : annotation.lookAt.x,
                isMobile ? annotation.lookAtMobile.y : annotation.lookAt.y,
                isMobile ? annotation.lookAtMobile.z : annotation.lookAt.z
            );

            raycaster.current.set(camera.position, annotationPosition.clone().sub(camera.position).normalize());
            const intersects = raycaster.current.intersectObjects(scene.children, true);

            let opacity = 1;

            if (intersects.length > 0) {
                const closestIntersection = intersects[0];
                const distanceToIntersection = camera.position.distanceTo(closestIntersection.point);
                const distanceToAnnotation = camera.position.distanceTo(annotationPosition);

                if (distanceToIntersection < distanceToAnnotation) {
                    opacity = 0.5;
                }
            }

            if (opacities[index] !== opacity) {
                setOpacities(prev => {
                    const newOpacities = [...prev];
                    newOpacities[index] = opacity;
                    return newOpacities;
                });
            }
        });
    });

    useEffect(() => { if (target) invalidate(); }, [target, invalidate])

    const handleClick = (annotation, index) => {
        const lookAt = isMobile
            ? new Vector3(annotation.lookAtMobile.x, annotation.lookAtMobile.y, annotation.lookAtMobile.z)
            : new Vector3(annotation.lookAt.x, annotation.lookAt.y, annotation.lookAt.z);

        const camPos = isMobile
            ? new Vector3(annotation.camPosMobile.x, annotation.camPosMobile.y, annotation.camPosMobile.z)
            : new Vector3(annotation.camPos.x, annotation.camPos.y, annotation.camPos.z);

        setTarget({ lookAt, camPos });
        setSelected(index);
    };

    return (
        <>
            {annotations.map((annotation, index) => (
                <Html key={index} className={style.annotation} style={{ opacity: opacities[index] }} position={isMobile ? [annotation.lookAtMobile.x, annotation.lookAtMobile.y, annotation.lookAtMobile.z] : [annotation.lookAt.x, annotation.lookAt.y, annotation.lookAt.z]}>
                    <div className={style.annotation_text} onClick={() => handleClick(annotation, index)}>
                        {annotation.text}
                    </div>
                    {annotation.info && index === selected &&
                    <div className={style.annotation_info}>
                        {annotation.info}
                    </div>
                    }
                </Html>
            ))}
        </>
    );
};

export default memo(Annotations);
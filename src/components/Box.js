import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
const Box = (props) => {
    const mesh = useRef();
    const [active, setActive] = useState(false);
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });
    const texture = useMemo(() => new THREE.TextureLoader().load('images/smoke.png'), []);
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
            onClick={(e) => setActive(!active)}
            onUpdate={(self) => console.log('props have updated!')}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                <primitive attach="map" object={texture} />
            </meshBasicMaterial>
        </mesh>
    );
}
export default Box
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';



export default function Sphere() {
    return (
        <Canvas style={{display:'flex'}}>
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} />
            <Cylinder position={[-1.2, 0, 0]} wireframe={true}/>
        </Canvas>
    );
}

function Cylinder(props) {
    // This reference will give us direct access to the mesh
    const mesh = React.useRef();

    // Set up state for the hovered and active state
    const [hovered, setHover] = React.useState(false);
    const [active, setActive] = React.useState(false);

    // Rotate mesh every frame, this is outside of React without
    // rendering, so the canvas will not redraw every frame

    
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={()=>{
                setActive(!active);
            }}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <sphereGeometry args={[1, 10, 10]} />
            <meshStandardMaterial color={hovered ? '#5D3FD3' : 'orange'} wireframe={props.wireframe}/>
        </mesh>
    );
}

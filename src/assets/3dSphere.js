import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';

export default function Sphere() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <Cylinder position={[0, 0, 0]} wireframe={true} />
    </Canvas>
  );
}

function Cylinder(props) {
  const mesh = React.useRef();

  const [hovered, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setActive(!active);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01;
  });

  return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={handleOpen}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <sphereGeometry args={[2, 1, 1]} />
        <meshStandardMaterial
          color={hovered ? '#5D3FD3' : 'beige'}
          wireframe={props.wireframe}
        />
      </mesh>
  );
}

import React, { useEffect, useState } from 'react';
import Box from './common/Box';
import useMousePosition from './hooks/useMousePosition';
import Flex from './common/Flex';

const cx = 1527 / 1.87;
const cy = 934 / 2;

const Collage = () => {
  const { x: mx, y: my } = useMousePosition();
  const [{ x, y }, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const phi = Math.atan2(my - cy, mx - cx);
    const nx = cx + 45 * Math.cos(phi);
    const ny = cy + 45 * Math.sin(phi);
    setEyePosition({ x: nx, y: ny });
  }, [mx, my, x, y]);

  return (
    <>
      <img src="/images/Untitled_Artwork 2.png" alt="Untitled_Artwork" />
      <Box position="absolute" style={{ left: x, top: y }}>
        <img height="60px" width="60px" src="/images/eye.png" alt="eye" />
      </Box>
    </>
  );
};

const AnimatedCollage = () => {
  return (
    <Flex maxH="934px" maxW="1527px" justify="center">
      <Collage />
    </Flex>
  );
};

export default AnimatedCollage;

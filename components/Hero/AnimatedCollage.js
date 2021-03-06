import React, { useRef } from 'react';
import Box from '../common/Box';
import Flex from '../common/Flex';
import useSize from '../hooks/useSize';
import useMightyMouse from 'react-hook-mighty-mouse';

const degreesToRadians = (degrees) => {
  if (degrees > 180) degrees -= 360;
  return degrees * (Math.PI / 180) * -1;
};

const AnimatedCollage = () => {
  const {
    selectedElement: {
      position: { x, y, angle }
    }
  } = useMightyMouse(true, 'eye', { x: 20, y: 20 });
  const ref = useRef(null);
  const size = useSize(ref);

  const phi = degreesToRadians(angle);

  const initialLeft = size?.width / 1.87 || 0;
  const initialTop = size?.height / 2.02 || 0;
  const left = initialLeft + Math.min(20, Math.abs(x)) * Math.cos(phi);
  const top = initialTop + Math.min(20, Math.abs(y)) * Math.sin(phi);

  return (
    <Flex width="100%" height="100%" justify="center">
      <Flex
        width={size?.width || '100%'}
        height={size?.height || '100%'}
        justify="center"
        position="relative">
        <img ref={ref} src="/images/hero/collage.png" alt="Collage" />
        <Box
          position="absolute"
          style={{ left, top }}>
          <img height="40px" width="40px" src="/images/hero/eye.png" alt="eye" />
        </Box>
        <Box id="eye" position="absolute" style={{ left: initialLeft, top: initialTop }} opacity={0} /> 
      </Flex>
    </Flex>
  );
};

export default AnimatedCollage;

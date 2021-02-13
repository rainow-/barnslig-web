import React, { useRef, useEffect, useState } from 'react';
import Box from './common/Box';
import Flex from './common/Flex';
import useMousePosition from './hooks/useMousePosition';
import useSize from './hooks/useSize';

const KingSquid = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  const mouse = useMousePosition();
  const [eyePosition, setEyePosition] = useState(null);

  useEffect(() => {
    if (size) {
      const { width, height } = size;

      const cx = width / 2.09;
      const cy = height / 3;

      const phi = Math.atan2(mouse.y - cy, mouse.x - cx);
      const nx = cx + 45 * Math.cos(phi);
      const ny = cy + 45 * Math.sin(phi);
      setEyePosition({ x: nx, y: ny });
    }
  }, [mouse, size]);

  return (
    <Flex ref={ref} justify="center" pos="relative">
      {eyePosition && (
        <>
          <img src="/images/squidbody.png" alt="Squid body" />
          <Box pos="absolute" style={{ left: eyePosition.x, top: eyePosition.y }}>
            <img src="/images/squideye.png" alt="Squid eye" />
          </Box>
        </>
      )}
    </Flex>
  );
};

export default KingSquid;

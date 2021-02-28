import React, { useCallback } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { layout } from 'styled-system';
import Image from 'next/image';

const AnimatedImg = styled(animated.div)`
  ${layout};
`;

const trans = s => `scale(${s})`;

const AnimatedLogo = ({ onClick }) => {
  const [{ s }, set] = useSpring(() => ({
    s: 1,
    config: { mass: 5, tension: 350, friction: 10 }
  }));

  const onMouseOver = useCallback(() => set({ s: 1.1 }), [set]);
  const onMouseLeave = useCallback(() => set({ s: 1 }), [set]);

  return (
    <AnimatedImg
      width="100%"
      height="100%"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={{
        transform: s.interpolate(trans)
      }}>
      <Image src="/images/Untitled_Artwork 4.png" layout="fill" objectFit="contain" />
    </AnimatedImg>
  );
};

AnimatedLogo.propTypes = {
  onClick: t.func
};

export default AnimatedLogo;

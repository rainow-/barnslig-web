import React, { useCallback, useEffect } from 'react';
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
    s: 0.7,
    config: { mass: 5, tension: 300, friction: 10 },
  }));

  useEffect(() => {
    set({ s: 1 });
  }, [set]);

  const onMouseOver = useCallback(() => set({ s: 1.15 }), [set]);
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
      <Image src="/images/logo.png" alt="Logo" layout="fill" objectFit="contain" />
    </AnimatedImg>
  );
};

AnimatedLogo.propTypes = {
  onClick: t.func
};

export default AnimatedLogo;

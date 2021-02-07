import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const AnimatedImg = styled(animated.img)`
  width: 20%;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Logo = ({ onClick }) => {
  const [spring, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 20 }
  }));

  return (
    <AnimatedImg
      src="/images/logo.svg"
      onClick={onClick}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      style={{ transform: spring.xys.interpolate(trans) }}
    />
  );
};

Logo.propTypes = {
  onClick: t.func
};

export default Logo;

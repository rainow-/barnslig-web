import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

const AnimatedClouds = () => {
  const [resetAnimation, setResetAnimation] = useState(false);

  const { opacity } = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.2 },
    onRest: () => setResetAnimation(state => !state),
    config: { duration: 2000 },
    reset: resetAnimation,
    reverse: resetAnimation,
  });

  return (
    <animated.div className="script-bf-box" style={{ opacity }}>
      <Image src="/images/Untitled_Artwork 3.png" layout="fill" objectFit="contain" />
    </animated.div>
  );
};

export default AnimatedClouds;

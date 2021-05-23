import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Box from '../components/common/Box';
import Img from '../components/common/Img';

const Test = styled(ParallaxLayer)`
  background: linear-gradient(180deg, rgba(34, 109, 121, 1) 0%, #53c6b6 100%);
`;
const Space = styled(ParallaxLayer)`
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(34, 109, 121, 1) 100%);
`;

const Home = () => {
  const parallax = useRef(null);

  return (
    <Parallax ref={parallax} horizontal={false} pages={5}>
      <Box height="100vh">
        <Menu position="absolute" zIndex="100" width="100%" />
        <Hero />
      </Box>  

      <Space offset={0} speed={1} factor={4} onClick={() => parallax.current.scrollTo(2)} />
      <Test offset={2} speed={1} factor={2} />
      <ParallaxLayer offset={3} speed={1} factor={2} style={{ backgroundColor: '#53C6B6' }} />
      <ParallaxLayer offset={4} speed={1} factor={2} style={{ backgroundColor: 'yellow' }} />
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{ backgroundImage: 'url(images/stars.svg)', backgroundSize: 'cover' }}
      />

      <ParallaxLayer offset={0.7} speed={0.7} style={{ zIndex: 200 }}>
        <Img src="/images/parallax/moon.png" alt="Moon" width="25%" ml="5%" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.5}>
        <Img
          src="/images/parallax/planet.png"
          alt="Planet"
          width="25%"
          ml="75%"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={0.3}>
        <Img
          src="/images/parallax/spaceship.png"
          alt="Space goo"
          width="60%"
          ml="20%"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.3} speed={0.4}>
        <Img
          src="/images/parallax/jetpack.png"
          alt="Space goo"
          width="65%"
          ml="19%"
        />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

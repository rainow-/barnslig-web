import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Box from '../components/common/Box';

const Test = styled(ParallaxLayer)`
  background: linear-gradient(180deg, rgba(34, 109, 121, 1) 0%, #53c6b6 100%);
`;
const Space = styled(ParallaxLayer)`
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(34, 109, 121, 1) 100%);
`;

/* const MyHero = styled(Box)`
  background: linear-gradient(180deg, rgba(217,245,239,1) 0%, rgba(82,199,181,1) 41%, rgba(41,83,103,1) 75%, rgba(37,50,55,1) 100%);
  background: #fed5ec;
`; */

const Home = () => {
  const parallax = useRef(null);

  return (
    <Parallax ref={parallax} vertical scrolling={true} pages={5}>
      <Box height="100vh">
        <Menu position="absolute" zIndex="100" width="100%" />
        <Hero />
      </Box>  
      {/* <MyHero height="85vh" position="relative" zIndex="1">
        <Menu />
        <Flex justify="center" position="absolute" top="25vh" left="20%">
          <img src="/images/hero.png" alt="hero" width="1000px" />
        </Flex>
      </MyHero> */}

      <Space offset={0} speed={1} factor={4} onClick={() => parallax.current.scrollTo(2)} />
      {/* <Space offset={1} speed={1} factor={2} /> */}
      <Test offset={2} speed={1} factor={2} />
      <ParallaxLayer offset={3} speed={1} factor={2} style={{ backgroundColor: '#53C6B6' }} />
      <ParallaxLayer offset={4} speed={1} factor={2} style={{ backgroundColor: 'yellow' }} />
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{ backgroundImage: 'url(images/stars.svg)', backgroundSize: 'cover' }}
      />

      <ParallaxLayer offset={0.4} speed={0.5}>
        <img src="/images/moon.png" alt="Moon" style={{ width: '30%', marginLeft: '5%' }} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.5}>
        <img
          src="/images/rockeringplanet.png"
          alt="Planet"
          style={{ width: '25%', marginLeft: '70%' }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={-0.2}>
        <img
          src="/images/spacegoo.png"
          alt="Space goo"
          style={{ width: '45%', marginLeft: '28%' }}
        />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

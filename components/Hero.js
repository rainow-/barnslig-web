import React from 'react';
import styled from 'styled-components';
import Grid from './common/Grid';
import Image from 'next/image';
import Box from './common/Box';
import AnimatedLogo from './AnimatedLogo';

const Collage = styled(Box)``;
const collage = {
  position: 'relative',
  zIndex: 60,
  gridArea: ['14 / 1 / 37 / 37'],
};

const Rainbow = styled(Box)``;
const rainbow = {
  position: 'relative',
  opacity: 0.4,
  zIndex: 40,
  gridArea: ['10 / 1 / 37 / 37'],
};

const Logo = styled(Box)``;
const logo = {
  position: 'relative',
  zIndex: 70,
  gridArea: ['4 / 10 / 10 / 28']
};

const Clouds = styled(Box)``;
const clouds = {
  position: 'relative',
  opacity: 0.8,
  zIndex: 30,
  gridArea: ['1 / 3 / 28 / 35']
};

const Darkness = styled(Box)``;
const darkness = {
  position: 'relative',
  zIndex: 50,
  gridArea: ['27 / 1 / 37 / 37'],
};

const Hero = () => {
  return (
    <Grid
      bg="pink"
      zIndex="1"
      height="100vh"
      position="relative"
      templateColumns="repeat(36, 1fr)"
      templateRows="repeat(36, 1fr)"
      overflow="hidden">
      <Logo {...logo}>
        <AnimatedLogo />
      </Logo>
      <Rainbow {...rainbow}>
        <Image src="/images/Untitled_Artwork.png" layout="fill" objectFit="cover" objectPosition="top" />
      </Rainbow>
      <Collage {...collage}>
        <Image src="/images/Untitled_Artwork 2.png" layout="fill" objectFit="contain" objectPosition="bottom" />
      </Collage>
      <Clouds {...clouds}>
        <Image src="/images/Untitled_Artwork 3.png" layout="fill" objectFit="contain" />
      </Clouds>
      <Darkness {...darkness}>
        <Image src="/images/Untitled_Artwork 5.png" layout="fill" objectFit="cover" objectPosition="bottom" />
      </Darkness>
    </Grid>
  );
};

export default Hero;

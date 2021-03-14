import React from 'react';
import styled from 'styled-components';
import Grid from './common/Grid';
import Image from 'next/image';
import Box from './common/Box';
import AnimatedLogo from './AnimatedLogo';
import AnimatedCollage from './AnimatedCollage';
import AnimatedClouds from './AnimatedClouds';

const Collage = styled(Box)``;
const collage = {
  position: 'relative',
  zIndex: 60,
  gridArea: '14 / 1 / 37 / 37'
};

const Rainbow = styled(Box)``;
const rainbow = {
  position: 'relative',
  opacity: 0.4,
  zIndex: 40,
  gridArea: '10 / 1 / 37 / 37'
};

const Logo = styled(Box)``;
const logo = {
  position: 'absolute',
  top: '10vh',
  zIndex: 70,
  height: ['143px', '186px'],
  width: ['250px', '293px'],
  justifySelf: 'center'
};

const Clouds = styled(Box)``;
const clouds = {
  position: 'absolute',
  top: '10vh',
  zIndex: 30,
  width: '90vw',
  height: '55vh',
  justifySelf: 'center',
};

const Darkness = styled(Box)``;
const darkness = {
  position: 'relative',
  zIndex: 50,
  gridArea: '27 / 1 / 37 / 37'
};

const Hero = () => {
  return (
    <Grid
      bg="#ffa1d8"
      zIndex="1"
      height="100%"
      position="relative"
      templateColumns="repeat(36, 1fr)"
      templateRows="repeat(36, 1fr)"
      overflow="hidden">
      <Logo {...logo} cursor="pointer">
        <AnimatedLogo />
      </Logo>
      <Rainbow {...rainbow}>
        <Image
          src="/images/Untitled_Artwork.png"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </Rainbow>
      <Collage {...collage}>
        <AnimatedCollage />
      </Collage>
      <Clouds {...clouds}>
        <AnimatedClouds />
      </Clouds>
      <Darkness {...darkness}>
        <Image
          src="/images/Untitled_Artwork 5.png"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </Darkness>
    </Grid>
  );
};

export default Hero;

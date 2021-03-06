import React from 'react';
import styled from 'styled-components';
import Grid from '../common/Grid';
import Image from 'next/image';
import Box from '../common/Box';
import AnimatedLogo from './AnimatedLogo';
import AnimatedCollage from './AnimatedCollage';
import AnimatedClouds from './AnimatedClouds';
import Img from '../common/Img';

const Collage = styled(Box)``;
const collage = {
  position: 'relative',
  zIndex: 60,
  gridArea: '14 / 1 / 37 / 37'
};

const Rainbow = styled(Box)``;
const rainbow = {
  position: 'relative',
  opacity: 0.5,
  zIndex: 40,
  gridArea: '6 / 1 / 37 / 37'
};

const Logo = styled(Box)``;
const logo = {
  position: 'absolute',
  top: '2vh',
  left: '3vw',
  zIndex: 70,
  height: ['143px', '186px'],
  width: ['200px', '243px']
};

const Clouds = styled(Box)``;
const clouds = {
  position: 'absolute',
  top: '-5vh',
  zIndex: 30,
  width: '110vw',
  height: '55vh',
  justifySelf: 'center'
};

const Darkness = styled(Box)``;
const darkness = {
  position: 'absolute',
  zIndex: 50,
  gridArea: '30 / 1 / 37 / 37'
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
      /* overflow="hidden" */>
      <Logo {...logo} cursor="pointer">
        <AnimatedLogo />
      </Logo>
      <Rainbow {...rainbow}>
        <Image
          src="/images/hero/rainbow.png"
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
        <Img src="/images/hero/25498-ai.svg" width="100vw" height="100%" />
      </Darkness>
    </Grid>
  );
};

export default Hero;

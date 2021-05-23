import React from 'react';
import { motion } from 'framer-motion';
import Box from './common/Box';
import Flex from './common/Flex';
import Grid from './common/Grid';
import Img from './common/Img';
import Section from './common/Section';

const AnimatedImg = motion.custom(Img);

const Hero = () => {
  const variants = {
    expand: {
      scale: [1, 1.2],
      transition: { duration: 0.8, repeat: Infinity, repeatType: 'reverse' }
    }
  };

  return (
    <Section mx="auto">
      <Box position="absolute" left={['50%', 0]}>
        <Img
          src="/images/logo.png"
          alt="Logo"
          maxWidth={[200]}
          position="relative"
          left={['-50%', 10]}
          top={[10]}
        />
      </Box>
      <Flex px={2} py={[16, 8, 0]} minH="100vh" overflowX="hidden" justify="center" alignItems="flex-end">
        <Grid
          maxW="3xl"
          templateColumns="repeat(16, 1fr)"
          templateRows="repeat(16, 1fr)">
          <Box gridArea="3 / 2 / 17 / 16" zIndex={10}>
            <Img src="/images/burger.png" alt="Burger" width="100%" height="100%" />;
          </Box>
          <Box
            gridArea={['1 / 9 / 5 / 17', '2 / 10 / 5 / 16']}
            style={{ rotate: 5, willChange: 'transform' }}>
            <AnimatedImg
              variants={variants}
              animate="expand"
              src="/images/coming-soon.png"
              alt="Coming Soon!"
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
      </Flex>
    </Section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import Box from './common/Box';
import Flex from './common/Flex';
import Grid from './common/Grid';
import Img from './common/Img';

const AnimatedBox = motion.custom(Box);

const Hero = () => {
  const variants = {
    expand: {
      scale: [1, 1.2],
      transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' }
    }
  };

  return (
    <Box>
      <Flex position="absolute" width="100%" justify={['center', 'flex-start']}>
        <Img src="/images/logo.png" alt="Logo" maxWidth={250} my={[20, 5, 20]} mx={[0, 5, 20]} />
      </Flex>
      <Flex px={2} py={[16, 8, 0]} height="100vh" justify="center" alignItems="flex-end">
        <Grid
          position="relative"
          maxW="3xl"
          templateColumns="repeat(16, 1fr)"
          templateRows="repeat(16, 1fr)">
          <Box gridArea="3 / 2 / 17 / 16">
            <Img src="/images/burger.png" alt="Burger" width="100%" height="100%" />;
          </Box>
          <AnimatedBox
            variants={variants}
            animate="expand"
            position="absolute"
            gridArea={['1 / 9 / 5 / 17', '2 / 10 / 5 / 16']}
            zIndex={-10}
            style={{ rotate: 5, willChange: 'transform' }}>
            <Img src="/images/coming-soon.png" alt="Coming Soon!" width="100%" height="100%" />
          </AnimatedBox>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Hero;

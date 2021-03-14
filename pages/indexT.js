import React from 'react';
import Box from '../components/common/Box';
import Hero from '../components/Hero';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <Box height="100vh">
      <Menu position="absolute" zIndex="100" width="100%" />
      <Hero />
    </Box>
  );
};

export default Home;

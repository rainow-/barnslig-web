import React from 'react';
import t from 'prop-types';
import Box from './Box';

const Section = ({ children, ...props }) => (
  <Box as="section" maxW="8xl" {...props}>
    {children}
  </Box>
);

Section.propTypes = {
  children: t.node.isRequired
};

export default Section;

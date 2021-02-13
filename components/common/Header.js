import React from 'react';
import t from 'prop-types';
import Box from './Box';

const Header = ({ children, ...props }) => (
  <Box as="header" {...props}>
    {children}
  </Box>
);

Header.propTypes = {
  children: t.node.isRequired
};

export default Header;

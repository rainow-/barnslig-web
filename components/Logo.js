import React from 'react';
import t from 'prop-types';
import Img from './common/Img';

const Logo = ({ width = 32, onClick }) => {
  return <Img cursor="pointer" src="/images/logo.svg" width={width} onClick={onClick} />;
};

Logo.propTypes = {
  width: t.number,
  onClick: t.func
};

export default Logo;

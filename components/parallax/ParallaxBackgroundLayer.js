import React from 'react';
import t from 'prop-types';
import { ParallaxLayer } from '@react-spring/parallax';

const ParallaxBackgroundLayer = ({ imgSrc, ...props }) => (
  <ParallaxLayer
    offset={0}
    speed={0}
    style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover'
    }}
    {...props}
  />
);

ParallaxBackgroundLayer.propTypes = {
  offset: t.number.isRequired,
  speed: t.number.isRequired,
  factor: t.number,
  imgSrc: t.string.isRequired
};

export default ParallaxBackgroundLayer;

import React from 'react';
import t from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

const ParallaxBackgroundLayer = ({ offset, speed, factor = 1, imgSrc }) => (
  <ParallaxLayer
    offset={offset}
    speed={speed}
    factor={factor}
    style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover'
    }}
  />
);

ParallaxBackgroundLayer.propTypes = {
  offset: t.number.isRequired,
  speed: t.number.isRequired,
  factor: t.number,
  imgSrc: t.string.isRequired
};

export default ParallaxBackgroundLayer;

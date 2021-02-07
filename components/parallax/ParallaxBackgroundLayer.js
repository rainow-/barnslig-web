import React from 'react';
import t from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

const ParallaxBackgroundLayer = ({ offset, speed, imgSrc }) => (
  <ParallaxLayer
    offset={offset}
    speed={speed}
    style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover'
    }}
  />
);

ParallaxBackgroundLayer.propTypes = {
  offset: t.number.isRequired,
  speed: t.number.isRequired,
  imgSrc: t.string.isRequired
};

export default ParallaxBackgroundLayer;

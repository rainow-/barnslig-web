import { system } from 'styled-system';

const aliases = {
  d: {
    property: 'display',
  },
  w: {
    property: 'width',
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  b: {
    property: 'border',
    scale: 'borders',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  pos: {
    property: 'position',
  },
  flexDir: {
    property: 'flexDirection',
  },
  fontW: {
    property: 'fontWeight',
    scale: 'typography',
  },
  align: {
    property: 'alignItems',
  },
  justify: {
    property: 'justifyContent',
  },
  direction: {
    property: 'flexDirection',
  },
  wrap: {
    property: 'flexWrap',
  },
  flex: {
    property: 'flex',
  },
  textTrans: {
    property: 'text-transform'
  },
  whiteSpace: {
    property: 'white-space',
  },
  textOverflow: {
    property: 'text-overflow',
  },
  cursor: {
    property: 'cursor',
  },
  wb: {
    property: 'word-break'
  }
};

export default system(aliases);

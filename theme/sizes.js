export const baseSizes = {
  px: '1px',
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.6rem',
  16: '4rem',
  17: '4.3rem',
  18: '4.7rem',
  20: '5rem',
  22: '5.2rem',
  24: '6rem',
  26: '6.7rem',
  32: '8rem',
  34: '8.5rem',
  36: '9rem',
  38: '9.5rem',
  40: '10rem',
  42: '10.5rem',
  48: '12rem',
  50: '12.5rem',
  56: '14rem',
  64: '16rem',
};

const largeSizes = {
  'full': '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  'xs': '20rem',
  'sm': '24rem',
  'md': '28rem',
  'lg': '32rem',
  'xl': '36rem',
  '2xl': '39rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  '8xl': '90rem',
};

const containers = {
  sm: '40rem', // 640px
  md: '58rem', // 768px
  lg: '64rem', // 1024px
  xl: '80rem', // 1280px
};

const sizes = {
  ...baseSizes,
  ...largeSizes,
  containers,
};

export default sizes;

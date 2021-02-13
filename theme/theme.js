import sizes, { baseSizes } from './sizes';

const space = baseSizes;

const theme = {
  sizes,
  space,
  fonts: {
    heading: '"Inter Regular"',
    body: '"Inter Regular"',
    semibold: '"Inter Semibold"',
    regular: '"Inter Regular"',
    medium: '"Inter Medium"',
    italic: '"Inter Italic"',
    italicHeading: '"Inter Medium Italic"',
  },
  fontFaces: {
    heading: {
      name: 'Inter Regular',
      url: '/fonts/Inter-Regular.woff2',
      format: 'woff2'
    },
    body: {
      name: 'Inter Regular',
      url: '/fonts/Inter-Regular.woff2',
      format: 'woff2'
    },
    semibold: {
      name: 'Inter Semibold',
      url: '/fonts/Inter-SemiBold.woff2',
      format: 'woff2'
    },
    medium: {
      name: 'Inter Medium',
      url: '/fonts/Inter-Medium.woff2',
      format: 'woff2'
    },
    regular: {
      name: 'Inter Regular',
      url: '/fonts/Inter-Regular.woff2',
      format: 'woff2'
    },
    italic: {
      name: 'Inter Italic',
      url: '/fonts/Inter-Italic.woff2',
      format: 'woff2'
    },
    italicHeading: {
      name: 'Inter Medium Italic',
      url: '/fonts/Inter-MediumItalic.woff2',
      format: 'woff2'
    }
  },
};

export default theme;

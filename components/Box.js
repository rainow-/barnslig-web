import styled from 'styled-components';
import {
  padding,
  color,
  margin,
  shadow,
  position,
  grid,
  layout,
  border,
  alignSelf,
  gridColumn,
  gridRow,
  zIndex,
  background
} from 'styled-system';
import { aliases } from '../theme';

const Box = styled.div`
  ${aliases}
  ${background};
  ${grid};
  ${layout};
  ${padding};
  ${margin};
  ${color};
  ${shadow};
  ${position};
  ${border};
  ${alignSelf}
  ${gridColumn}
  ${gridRow}
  ${zIndex}
`;

export default Box;

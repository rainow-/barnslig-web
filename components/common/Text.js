import styled from 'styled-components';
import {
  lineHeight,
  padding,
  margin,
  color,
  background,
  typography,
  layout,
  border
} from 'styled-system';
import { aliases } from '../../theme';

const Text = styled.p`
  ${aliases};
  ${lineHeight};
  ${padding};
  ${margin};
  ${color};
  ${background};
  ${typography};
  ${layout};
  ${border};
`;

export default Text;

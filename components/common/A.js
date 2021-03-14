import styled from 'styled-components';
import { typography, space, flexbox, zIndex, color } from 'styled-system';
import { aliases } from '../../theme';

const A = styled.a`
  color: black;

  ${typography};
  ${space};
  ${flexbox};
  ${zIndex};
  ${color};
  ${aliases};
`;

export default A;

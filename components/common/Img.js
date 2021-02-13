import styled from 'styled-components';
import { layout, padding, color, margin, shadow, position } from 'styled-system';
import { aliases } from '../../theme';

const Img = styled.img`
  ${layout};
  ${padding};
  ${margin};
  ${color};
  ${shadow};
  ${position};
  ${aliases};
`;

export default Img;

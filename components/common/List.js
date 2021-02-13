import styled from 'styled-components';
import { color, padding, margin } from 'styled-system';
import { aliases } from '../../theme';

const List = styled.ul`
  list-style-type: none;

  ${color};
  ${padding};
  ${margin};
  ${aliases};
`;

export default List;

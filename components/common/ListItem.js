import styled from 'styled-components';
import { color, padding, margin } from 'styled-system';
import { aliases } from '../../theme';

const ListItem = styled.li`
  display: inline;
  
  ${color};
  ${padding};
  ${margin};
  ${aliases};
`;

export default ListItem;

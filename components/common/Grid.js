import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const Grid = ({
  gap,
  rowGap,
  columnGap,
  autoFlow,
  autoRows,
  autoColumns,
  templateRows,
  templateColumns,
  templateAreas,
  area,
  column,
  row,
  ...props
}) => (
  <Box
    display="grid"
    gridArea={area}
    gridTemplateAreas={templateAreas}
    gridGap={gap}
    gridRowGap={rowGap}
    gridColumnGap={columnGap}
    gridAutoColumns={autoColumns}
    gridColumn={column}
    gridRow={row}
    gridAutoFlow={autoFlow}
    gridAutoRows={autoRows}
    gridTemplateRows={templateRows}
    gridTemplateColumns={templateColumns}
    {...props}
  />
);

Grid.propTypes = {
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  rowGap: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  columnGap: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  autoFlow: PropTypes.string,
  autoRows: PropTypes.bool,
  autoColumns: PropTypes.bool,
  templateRows: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  templateColumns: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  templateAreas: PropTypes.array,
  area: PropTypes.string,
  column: PropTypes.string,
  row: PropTypes.string
};

export default Grid;

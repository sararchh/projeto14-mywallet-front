import React from 'react';

import { Button } from './styles';

function ButtonStyled({ width = 326, height = 46, children, onClick }) {
  return (
    <Button
      type='submit'
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonStyled;
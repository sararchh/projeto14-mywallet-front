import React from 'react';

import { Input, SpanStyled } from './styles';

function InputStyled({ placeholder, width = 326, height = 58, value, onChange, name, type = 'text', messageError }) {
  return (
    <>
      <Input
        type={type}
        name={name}
        width={width}
        height={height}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />

      {
        messageError && (
          <SpanStyled>{messageError}</SpanStyled>
        )
      }

    </>
  );
}

export default InputStyled;
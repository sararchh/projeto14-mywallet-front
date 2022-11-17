import React from 'react';

import { Container } from './styles';

function MainTemplate({ content }) {
  return (
    <Container>
      {content}
    </Container>

  )
}

export default MainTemplate;
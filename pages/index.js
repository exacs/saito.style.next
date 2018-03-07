import React from 'react';
import styled from 'styled-components';
import Header from './header';

const Container = styled.main`
  margin: auto;
`;

export default () => (
  <Container>
    <Header />
  </Container>
);

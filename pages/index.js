import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Timeline from './components/timeline';

const Container = styled.main`
  margin: auto;
`;

export default () => (
  <Container>
    <Header />
    <Timeline />
  </Container>
);

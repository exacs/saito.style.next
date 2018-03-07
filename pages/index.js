import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Timeline from './components/timeline';
import Head from 'next/head';

const Container = styled.main`
  margin: auto;
  padding: 16px;
  max-width: 720px;
`;

export default () => (
  <Container>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/global.css" />
    </Head>
    <Header />
    <Timeline />
  </Container>
);

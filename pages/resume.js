import React from 'react';
import styled from 'styled-components';

import Timeline from './components/timeline';
import X from './components/x';
import Head from 'next/head';

const Container = styled.main`
  margin: auto;
  padding: 16px;
  max-width: 720px;
`;

const Logo = styled.div`
  width: 30px;
`;

export default () => (
  <Container>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/global.css" />
    </Head>
    <Logo>
      <a href="/">
        <X />
      </a>
    </Logo>
    <Timeline />
  </Container>
);

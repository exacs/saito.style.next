import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import X from './components/x';

const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  width: 240px;
  margin: auto;
`;

const Link = styled.a`
  color: #000;
`;

export default () => (
  <Container>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/global.css" />
    </Head>
    <Content>
      <X />
      <div>
        <div>
          <Link href="/resume">resumé</Link>
        </div>
        <div>
          <Link href="https://medium.com/@saito_style">blog</Link>
        </div>
      </div>
    </Content>
  </Container>
);

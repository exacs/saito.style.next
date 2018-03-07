import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  line-height: 1.4rem;
  @media all and (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Part = styled.div`
  font-family: Georgia;
  padding: 0 24px 24px 24px;
  max-width: 320px;
  margin: auto;
  @media all and (min-width: 640px) {
    width: 320px;
    margin: 0;
  }
`;

const RightPart = Part.extend`
  @media all and (min-width: 640px) {
    text-align: right;
  }
`;

const Link = styled.a`
  color: #000;
  text-decoration: underline;
`;

export default () => (
  <Container>
    <Part>
      Aim to increase awareness about global issues making tools to improve the
      impact of data-based story-telling
    </Part>
    <RightPart>
      <div>Carlos Saito Murata</div>
      <div>Madrid + Uppsala</div>
      <div>
        <Link href="mailto:carlos@saito.style">mailto:carlos@saito.style</Link>
      </div>
      <div>
        <Link href="http://saito.style">http://saito.style</Link>
      </div>
      <div>
        <Link href="https://twitter.com/saito_style">
          twitter.com/saito_style
        </Link>
      </div>
      <div>
        <Link href="https://medium.com/@saito_style">
          medium.com/@saito_style
        </Link>
      </div>
      <div>
        <Link href="https://github.com/exacs">github.com/exacs</Link>
      </div>
    </RightPart>
  </Container>
);

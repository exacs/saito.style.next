import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const Container = styled.section`
  position: relative;
  border-top: #ccc 1px solid;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

const UnstyledLine = ({ start, end, className }) => {
  const zero = new Date('2009-03');
  const now = new Date();

  const total = now - zero;
  const relativeStart = (start - zero) / total;
  const relativeWidth = ((end || now) - start) / total;

  return (
    <div
      className={className}
      style={{
        transform: `translateX(${relativeStart *
          100}%) scaleX(${relativeWidth})`
      }}
    />
  );
};

const Line = styled(UnstyledLine)`
  transform-origin: left;
  border-top: #f00 1px solid;
  position: absolute;
  top: -1px;
  width: 100%;
`;

const Header = styled.header`
  color: #f00;
  font-weight: 700;
  @media all and (min-width: 480px) {
    display: flex;
  }
`;

const Time = styled.div`
  @media all and (min-width: 480px) {
    flex: 0 0 auto;
    width: 160px;
  }
`;

const Place = styled.div`
  @media all and (min-width: 480px) {
    flex: 1 0 0;
    text-align: right;
  }
`;

const Title = styled.div`
  font-size: 1.4rem;
`;

const Company = styled.div`
  font-size: 1.4rem;
`;

const Description = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const formatDate = date => date && format(date, 'YYYY/MM');

export default ({ start, end, place, title, company, description }) => (
  <Container>
    <Line start={start} end={end} />
    <Header>
      <Time>
        {formatDate(start)} &gt; {end ? formatDate(end) : 'present'}
      </Time>
      <Place>{place}</Place>
    </Header>
    <div>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <Description>{description}</Description>
    </div>
  </Container>
);

import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

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
  <div>
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
  </div>
);

import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  color: #f00;
  @media all and (min-width: 320px) {
    display: flex;
  }
`;

const Time = styled.div`
  @media all and (min-width: 320px) {
    width: 160px;
  }
`;

const Place = styled.div``;
const Title = styled.div``;
const Company = styled.div``;

const formatDate = date => date;

export default ({ start, end, place, title, company, description }) => (
  <div>
    <Header>
      <Time>
        {start.toString()} - {end && end.toString()}
      </Time>
      <Place>{place}</Place>
    </Header>
    <div>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <div>{description}</div>
    </div>
  </div>
);

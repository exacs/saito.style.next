import React from 'react';
import styled from 'styled-components';

import data from './timeline.data';
import Entry from './timeline-entry';

const EntryContainer = styled.section`
  border-top: #ccc 1px solid;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

export default () => (
  <div>
    {data.map(entry => (
      <EntryContainer>
        <Entry {...entry} />
      </EntryContainer>
    ))}
  </div>
);

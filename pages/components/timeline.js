import React from 'react';
import styled from 'styled-components';

import data from './timeline.data';
import Entry from './timeline-entry';

export default () => <div>{data.map(entry => <Entry {...entry} />)}</div>;

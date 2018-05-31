import React from 'react';
import { render } from 'react-dom';
import TestComponent from './testComponent';

render(
  <TestComponent
    headline="Test Headline"
    count={1234}
    showCount
  />,
  document.getElementById('app'),
);

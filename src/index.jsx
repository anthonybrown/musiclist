import React from 'react';
import { render } from 'react-dom';
import TestComponent from './testComponent';

render(
  <TestComponent headline="Test Headline" />,
  document.getElementById('app'),
);

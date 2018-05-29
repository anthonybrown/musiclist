import React from 'react';
import PropTypes from 'prop-types';

function TestComponent(props) {
  return (
    <div>
      <h1>{props.headline}</h1>
    </div>
  );
}

TestComponent.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default TestComponent;

import React from 'react';
import PropTypes from 'prop-types';

function TestComponent(props) {
  const { headline, count, showCount } = props;
  return (
    <div>
      <h1>{headline}</h1>
      { showCount ? <p>{count}</p> : null }
    </div>
  );
}

TestComponent.propTypes = {
  headline: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  showCount: PropTypes.bool.isRequired,
};

export default TestComponent;

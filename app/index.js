// @flow
/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

type TestComponentPropType = {
  name?: string
};

function TestComponent({ name='Hello world' }: TestComponentPropType) {
  return <h1>{name}</h1>;
}

ReactDOM.render(<TestComponent />, document.getElementById('app'));

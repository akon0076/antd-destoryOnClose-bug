import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';
import { Thing } from '../src';
import { solution, param } from './leetcode';

const App = () => {
  console.log(param, solution);
  return (
    <div>
      <Thing />
      <h3>input: {JSON.stringify(param)}</h3>
      <h3>output: {JSON.stringify(solution)}</h3>
    </div>
  );
};

render(<App />, document.getElementById('root'));

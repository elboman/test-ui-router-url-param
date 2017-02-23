import React from 'react';
import {render} from 'react-dom';
import {UIRouter, UIView, pushStateLocationPlugin} from 'ui-router-react';

const Hello = ({ transition }) => {
  const params = transition.params();
  return (
    <div>Param is: {params.email}</div>
  );
}

const states = [{
  name: 'home',
  url: '/?email',
  component: Hello,
}];

const plugins = [
  pushStateLocationPlugin
];

render(
  <UIRouter states={states} plugins={plugins}>
    <UIView/>
  </UIRouter>,
  document.getElementById('root')
);
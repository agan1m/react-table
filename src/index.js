import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import createStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Particle from 'particleground-light';


const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store = { store }>
      {<AppRouter />||null}
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

(function () {
  new Particle(document.getElementById('root'));
})()



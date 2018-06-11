import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import BigDb from '../BigDb';
import SmallDb from '../SmallDb';
import Home from '../Home'
import './App.css'


class AppRouter extends Component {
  render() {
    return <div className="App">
        <ul className='menu'>
          <Link className='menu__item' to="/">Home</Link>
          <Link className='menu__item' to="/bigdb">Загрузить большую</Link>
          <Link className='menu__item' to="/smalldb">Загрузить маленькую</Link>
        </ul>
        <hr />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/bigdb" component={BigDb} />
          <Route path="/smalldb" component={SmallDb} />
        </Switch>
      </div>;
  }
}

export default AppRouter;

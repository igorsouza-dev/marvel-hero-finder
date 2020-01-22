import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Search from 'pages/Search';
import Details from 'pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/search" component={Search} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
}

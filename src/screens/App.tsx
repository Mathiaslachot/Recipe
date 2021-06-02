import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AnimateSharedLayout } from 'framer-motion';
import { Home } from './Home';
import { Favorite } from './Favorite';

function App() {
  return (
    <AnimateSharedLayout type='crossfade'>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/:detailId"]} component={Home} />
          <Route path={["/favorite/all", "/favorite/:detailId"]} component={Favorite} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </AnimateSharedLayout>
  );
}

export default App;

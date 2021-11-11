import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Home from './pages/Home';
import TableLookup from './pages/TableLookup';

export const App = () => (
  <Box>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/find-my-table" component={TableLookup} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Box>
);

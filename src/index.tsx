import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <HashRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

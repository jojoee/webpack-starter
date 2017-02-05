console.log('entry.js');

require('./sass/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index.js';

ReactDOM.render(<App />,
  document.getElementById('app')
);

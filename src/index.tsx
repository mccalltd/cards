import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Deck } from './components/deck';
import * as Models from './models/models';

let deck = new Models.Deck();

ReactDOM.render(
  <Deck deck={deck} />,
  document.getElementById('app'));

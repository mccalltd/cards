import * as React from 'react';

import * as Models from '../models/models';
import { Card } from './card';

interface DeckProps {
  deck: Models.Deck;
}

export const Deck = (props: DeckProps) => {
  return <div className='deck'>
    {props.deck.cards.map((c) => {
      let key = c.suit * 13 + c.value;
      console.log(key);
      return <Card key={key} card={c} />;
    })}
  </div>;
}

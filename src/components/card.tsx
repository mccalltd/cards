import * as React from 'react';
import * as Models from '../models/models';

interface CardProps {
  card: Models.Card;
}

export const Card = (props: CardProps) => {
  let value = props.card.value;
  let valueChar = Models.valueAsChar(value);

  var suit = props.card.suit;
  let suitChar = Models.suitAsChar(suit);
  let suitName = Models.Suit[suit].toLowerCase();

  let pips = [];
  for (let i = 0; i < value; i++) {
    pips.push(<div key={i} className="pip">{suitChar}</div>);
  }

  return <div className={`card suit-${suitName} value-${valueChar}`}>
    <div className="corner corner-tl">
      <div className="value">{valueChar}</div>
      <div className="suit">{suitChar}</div>
    </div>
    <div className="pips">{pips}</div>
    <div className="corner corner-br">
      <div className="value">{valueChar}</div>
      <div className="suit">{suitChar}</div>
    </div>
  </div>;
}

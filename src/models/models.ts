export class Card {
  constructor(readonly value: Value, readonly suit: Suit) {

  }
  toString() {
    let value = valueAsChar(this.value);
    let suit = suitAsChar(this.suit);
    return `${value}${suit}`;
  }
}

export enum Value { Ace = 1, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King }

/**
 * Returns the single character representation of a Value.
 */
export function valueAsChar(value: Value): string {
  switch (value) {
    case Value.Ace: return 'A';
    case Value.Jack: return 'J';
    case Value.Queen: return 'Q';
    case Value.King: return 'K'
    default: return `${value}`;
  }
}

export enum Suit { Spade, Heart, Club, Diamond }

/** 
 * Returns the escaped unicode character for a Suit.
 */
export function suitAsChar(suit: Suit): string {
  switch (suit) {
    case Suit.Spade: return '\u2660';
    case Suit.Heart: return '\u2665';
    case Suit.Club: return '\u2663';
    case Suit.Diamond: return '\u2666';
    default: throw `no unicode char mapped for "${suit}"`;
  }
}

export class Deck {
  readonly cards: Card[] = [];
  constructor() {
    for (let suit = 0; suit < 4; suit++) {
      for (let value = 1; value <= 13; value++) {
        this.cards.push(new Card(value, suit));
      }
    }
  }
}

import { cards as en_es_cards } from './en-es';

class CardManager {
  cards = en_es_cards;
  cardLevel = new Array<number>(this.cards.length);

  constructor() {
    console.log('Create CardManager!!!');
    for (let i=0; i < this.cards.length; ++i) {
      this.cardLevel[i] = Math.floor(Math.random() * 10);
    }
    console.log('cardLevels:', this.cardLevel);
  }

  getCardInfo(idx: number) {
    return {
      phrases: this.cards[idx],
      level: this.cardLevel[idx],
    }
  }

  getNextCardIdx(idx: number) {
    return (idx + 1) % this.cards.length;
  }
}

export default new CardManager();

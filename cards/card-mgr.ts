import { cards as en_es_cards } from './en-es';
import { CardLevels } from './card-levels';

export interface Card {
  idx : number,
  phrases : Array<string>,
  level : number,
};

class CardManager {
  cards = en_es_cards;
  cardLevels = new CardLevels(this.cards.length);

  constructor() {
    console.log('Create CardManager!!!');
  }

  // TODO: remove idx input parameter
  // TODO: rename to just getNextCard(void)
  getCardInfo(idx: number) : Card {
    return {
      idx: idx,
      phrases: this.cards[idx],
      level: this.cardLevels.getCardLevelByIdx(idx),
    }
  }

  // TODO: remove this.  useEffect should call getCardInfo directly.
  getNextCardIdx(idx: number) : number {
    return (idx + 1) % this.cards.length;
  }

  markCardAsCorrect(card: Card) {
    this.cardLevels.markCardAsCorrectByIdx(card.idx);
  }

  markCardAsWrong(card: Card) {
    this.cardLevels.markCardAsWrongByIdx(card.idx);
  }
}

export default new CardManager();

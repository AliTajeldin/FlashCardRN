import { cards as en_es_cards } from './en-es';
import { CardLevels } from './card-levels';

export interface Card {
  idx : number,
  phrases : Array<string>,
  level : number,
  valid : boolean,
};

export const NullCard : Card = {
  idx : -1,
  phrases: [],
  level: -1,
  valid: false,
};

class CardManager {
  cards = en_es_cards;
  cardLevels = new CardLevels(this.cards.length);

  // TODO: remove curCard input parameter
  getNextCard(curCard: Card) : Card {
    const idx = (curCard.idx + 1) % this.cards.length;
    return {
      idx: idx,
      phrases: this.cards[idx],
      level: this.cardLevels.getCardLevelByIdx(idx),
      valid: true,
    }
  }

  markCardAsCorrect(card: Card) {
    this.cardLevels.markCardAsCorrectByIdx(card.idx);
  }

  markCardAsWrong(card: Card) {
    this.cardLevels.markCardAsWrongByIdx(card.idx);
  }
}

export default new CardManager();

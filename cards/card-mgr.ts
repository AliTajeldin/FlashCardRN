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
  async getNextCard(curCard: Card) : Promise<Card> {
    const idx = (curCard.idx + 1) % this.cards.length;
    const level = await this.cardLevels.getCardLevelByIdx(idx);
    console.log('got level', level, ' for card idx:', idx);
    return {
      idx: idx,
      phrases: this.cards[idx],
      level: level,
      valid: true,
    }
  }

  async markCardAsCorrect(card: Card) {
    await this.cardLevels.markCardAsCorrectByIdx(card.idx);
  }

  async markCardAsWrong(card: Card) {
    await this.cardLevels.markCardAsWrongByIdx(card.idx);
  }
}

export default new CardManager();

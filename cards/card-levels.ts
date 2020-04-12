import { AppState } from "react-native";

/**
 * Manage current levels for cards
 */
export class CardLevels {
  levels : Array<number>;

  constructor(numOfCards: number) {
    console.log('Create CardLevels!!!');
    this.levels = new Array<number>(numOfCards);
    for (let i=0; i < numOfCards; ++i) {
      this.levels[i] = Math.floor(Math.random() * 10);
    }
    console.log('cardLevels:', this.levels);
    console.log('Register app state change');
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange(nextAppState: string) {
    console.log('APP STATE CHANGE', nextAppState);
  }

  getCardLevelByIdx(idx: number) : number {
    return this.levels[idx];
  }

  markCardAsCorrectByIdx(idx: number) {
    this.levels[idx] += 1;
  }

  markCardAsWrongByIdx(idx: number) {
    this.levels[idx] >>= 1;
  }

}


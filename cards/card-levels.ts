import { AppState, AsyncStorage } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';

/**
 * Manage current levels for cards
 */
export class CardLevels {
  levels : Array<number>;

  constructor(numOfCards: number) {
    console.log('Create CardLevels!!!V3');
    this.testAsyncStorage();
    this.levels = new Array<number>(numOfCards);
    for (let i=0; i < numOfCards; ++i) {
      this.levels[i] = Math.floor(Math.random() * 10);
    }
    console.log('cardLevels:', this.levels);
    console.log('Register app state change');
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  async testAsyncStorage() {
    // await AsyncStorage.setItem('@fc_key2', 'hello_world');
    const v = await AsyncStorage.getItem('@fc_key2');
    console.log('AsyncStorage value=', v);
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


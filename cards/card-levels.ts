import { AppState, AsyncStorage } from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

/**
 * Manage current levels for cards
 */
export class CardLevels {
  // cached levels.  Should not be used directly.  Use `getLevels` instead.
  private levels : Promise<Array<number>> = this._initLevels();

  constructor(private numOfCards: number) {
    console.log('Register app state change: V2');
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  /**
   * get the levels from the AsyncStorage or use the cached value if available.
   */
  private async _initLevels() : Promise<Array<number>> {
    // try to read the value stored in AysncStorage
    const levelsJsonStr = await AsyncStorage.getItem('@fc_levels');
    if (levelsJsonStr !== null) {
      console.log('Using json levels from AsyncStorage');
      return JSON.parse(levelsJsonStr) as Array<number>;
    }

    // fallback to random levels array for now.
    console.log('Using randome levels array');
    const ll = new Array<number>(this.numOfCards);
    for (let i=0; i < this.numOfCards; ++i) {
      ll[i] = Math.floor(Math.random() * 10);
    }
    return ll;
  }

  _handleAppStateChange(nextAppState: string) {
    console.log('APP STATE CHANGE', nextAppState);
  }

  async getCardLevelByIdx(idx: number) : Promise<number> {
    return (await this.levels)[idx];
  }

  async markCardAsCorrectByIdx(idx: number) {
    (await this.levels)[idx] += 1;
  }

  async markCardAsWrongByIdx(idx: number) {
    (await this.levels)[idx] >>= 1;
  }

}


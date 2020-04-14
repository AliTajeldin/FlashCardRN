import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import cardManager, {Card, NullCard} from '../cards/card-mgr';

export const CardScreen = () => {
  const [curCard, setCurCard] = useState<Card>(NullCard);

  useEffect(() => {
    loadNextCard();
  }, []);

  console.log('Render CardScreen:v9');

  const loadNextCard = async () => {
    const newCard = await cardManager.getNextCard(curCard)
    setCurCard(newCard);
  }

  const s1Touch = async () => {
    console.log('s1 touched! V2');
    await cardManager.markCardAsCorrect(curCard);
    await loadNextCard();
  }

  const s2Touch = async () => {
    console.log('s2 touched!');
    await cardManager.markCardAsWrong(curCard);
    await loadNextCard();
  }

  const renderCard = (card: Card) => {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.box1} onPress={s1Touch}>
          <Text style={styles.text}>{card.phrases[0]}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box2} onPress={s2Touch}>
          <Text style={styles.text}>{card.phrases[1]}</Text>
        </TouchableHighlight>
        <View style={styles.box3}>
          <Text style={styles.smallText}>index: {card.idx}  level: {card.level}</Text>
        </View>
      </View>
    );
  }

  return (curCard === null ? null : renderCard(curCard as Card));
}

// color pallete from: https://coolors.co/ccdad1-9caea9-788585-6f6866-38302e
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCDAD1',
  },
  box2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9CAEA9',
  },
  box3: {
    minHeight: 30,
    backgroundColor: '#6F6866',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  smallText: {
    color: 'white',
    fontSize: 12,
  },
  levelBar: {
    backgroundColor: '#ecce6d',
  }
});

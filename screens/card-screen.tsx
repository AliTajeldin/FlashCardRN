import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import cardManager, {Card, NullCard} from '../cards/card-mgr';

export const CardScreen = () => {
  const [curCard, setCurCard] = useState<Card>(NullCard);

  useEffect(() => {
    loadNextCard();
  }, []);

  console.log('Render CardScreen:v8');

  const loadNextCard = () => {
    setCurCard(cardManager.getNextCard(curCard));
  }

  const s1Touch = () => {
    console.log('s1 touched!');
    cardManager.markCardAsCorrect(curCard);
    loadNextCard();
  }

  const s2Touch = () => console.log('s2 touched!');

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
    backgroundColor: '#700',
  },
  box2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070',
  },
  box3: {
    minHeight: 30,
    backgroundColor: '#00f',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  smallText: {
    color: 'white',
    fontSize: 12,
  }
});

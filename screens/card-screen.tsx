import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { cards } from '../cards/en-es';

const s1 = 'hello\nthere';
export const CardScreen = () => {
  const [curCard, setCurCard] = useState(0);

  console.log('Render CardScreen!!!');
  console.log('cards:', cards);

  const s1Touch = () => {
    console.log('s1 touched!');
    setCurCard((curCard + 1) % 4);
  }
  const s2Touch = () => console.log('s2 touched!');

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.box1} onPress={s1Touch}>
        <Text style={styles.text}>{cards[curCard][0]}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.box2} onPress={s2Touch}>
        <Text style={styles.text}>{cards[curCard][1]}</Text>
      </TouchableHighlight>
      <View style={styles.box3}>
        <Text style={styles.text}>status</Text>
      </View>
    </View>
  );
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
    // width: '100%',
    backgroundColor: '#700',
  },
  box2: {
    flex: 1,
    // width: '100%',
    backgroundColor: '#070',
  },
  box3: {
    minHeight: 50,
    // width: '100%',
    backgroundColor: '#00f',
  },
  text: {
    color: 'white',
  }
});

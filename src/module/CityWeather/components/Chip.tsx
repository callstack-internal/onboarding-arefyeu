import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Chip = ({value}: {value: string}) => {
  return (
    <View testID="chip" style={styles.container}>
      <Text style={styles.text}>{value} &deg; F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#67AFD2',
    borderRadius: 16,
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
});

export default Chip;

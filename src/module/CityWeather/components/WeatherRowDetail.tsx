import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function WeatherRowDetail({
  label,
  value,
  testID,
}: {
  label: string;
  value: string;
  testID: string;
}) {
  return (
    <View style={styles.row}>
      <Text testID={label} style={styles.text}>
        {label}
      </Text>
      <Text testID={testID} style={styles.value}>
        {value}
      </Text>
    </View>
  );
}
export default WeatherRowDetail;

const styles = StyleSheet.create({
  row: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  text: {
    fontSize: 20,
  },
  value: {
    fontSize: 20,
    color: 'gray',
  },
});

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CityWeather} from '../types';
import {ICON_URL} from '../api/constants';
import Chip from './Chip';

function CityWeatherItem({
  item: {id, temperature, name, icon, condition},
  showChevron,
}: {
  item: CityWeather;
  showChevron?: boolean;
}) {
  const navigation = useNavigation();
  navigation.setOptions({title: name});
  const handleNavigationToWeatherItem = useCallback(() => {
    showChevron && navigation.navigate('CityWeatherDetails', {id});
  }, [id, navigation, showChevron]);
  return (
    <TouchableOpacity
      style={showChevron ? styles.container : styles.containerWithLine}
      accessibilityRole="button"
      accessibilityLabel={name}
      testID={name}
      onPress={handleNavigationToWeatherItem}>
      <View style={styles.mainContent}>
        <View style={styles.textAndImageContent}>
          <Image
            testID="image"
            accessibilityIgnoresInvertColors
            style={styles.image}
            source={{uri: `${ICON_URL}${icon}.png`}}
          />
          <View>
            <Text testID="name" style={styles.title}>
              {name}
            </Text>
            <Text testID="condition" style={styles.condition}>
              {condition}
            </Text>
          </View>
        </View>
        <Chip value={`${temperature} °F`} />
      </View>
      {showChevron && (
        <Image
          accessibilityIgnoresInvertColors
          testID="chevron"
          style={styles.image}
          source={require('../../../assets/chevron.png')}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAndImageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainContent: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {width: 32, height: 32, marginRight: 10},
  condition: {
    fontWeight: 'bold',
    color: '#95a5c9',
    fontSize: 14,
  },
  containerWithLine: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
  },
});

export default CityWeatherItem;

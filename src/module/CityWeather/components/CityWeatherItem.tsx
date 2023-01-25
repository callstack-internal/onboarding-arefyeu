import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CityWeather} from '../types';
import Chip from './Chip';

function CityWeatherItem({
  item: {id, value, title, description},
  showChevron,
}: {
  item: CityWeather;
  showChevron?: boolean;
}) {
  const navigation = useNavigation();
  const handleNavigationToWeatherItem = useCallback(() => {
    showChevron && navigation.navigate('CityWeatherDetails', {id});
  }, [id, navigation, showChevron]);
  return (
    <TouchableOpacity
      style={styles.container}
      accessibilityRole="button"
      accessibilityLabel={title}
      testID={title}
      onPress={handleNavigationToWeatherItem}>
      <View style={styles.mainContent}>
        <View style={styles.textAndImageContent}>
          <Image
            accessibilityIgnoresInvertColors
            style={styles.image}
            source={require('../../../assets/cloud-icon-14.png')}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        <Chip value={value} />
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
    padding: 16,
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
  image: {width: 24, height: 24, marginRight: 10},
  description: {
    fontWeight: 'bold',
    color: '#95a5c9',
    fontSize: 14,
  },
});

export default CityWeatherItem;

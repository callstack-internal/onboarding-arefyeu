import {FlatList} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import CityWeatherListHeader from '../components/CityWeatherListHeader';
import {CityWeather} from '../types';
import CityWeatherListItemSeparator from '../components/CityWeatherListItemSeparator';
import CityWeatherItem from '../components/CityWeatherItem';
import {useCityWeatherContext} from '../context/CityWeatherContext';

const keyExtractor = (item: Pick<CityWeather, 'id'>) => item.id.toString();

function CityWeatherListItems() {
  const {handleLoadCitiesWeather, weather} = useCityWeatherContext() || {};
  const renderItem = useCallback(({item}: {item: CityWeather}) => {
    return <CityWeatherItem item={item} showChevron />;
  }, []);

  useEffect(() => {
    handleLoadCitiesWeather?.();
  }, [handleLoadCitiesWeather]);

  return (
    <FlatList
      ListHeaderComponent={CityWeatherListHeader}
      data={weather}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      stickyHeaderIndices={[0]}
      ItemSeparatorComponent={CityWeatherListItemSeparator}
    />
  );
}

export default CityWeatherListItems;

import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import CityWeatherListHeader from '../components/CityWeatherListHeader';
import {CityWeather} from '../types';
import CityWeatherListItemSeparator from '../components/CityWeatherListItemSeparator';
import CityWeatherItem from '../components/CityWeatherItem';
import {useCityWeatherContext} from '../context/CityWeatherContext';
import CityWeatherError from '../components/CityWeatherError';

const keyExtractor = (item: Pick<CityWeather, 'id'>) => item.id.toString();

function CityWeatherListItems() {
  const {handleLoadCitiesWeather, weather, loading, error} =
    useCityWeatherContext() || {};
  const renderItem = useCallback(({item}: {item: CityWeather}) => {
    return <CityWeatherItem item={item} showChevron />;
  }, []);

  useEffect(() => {
    handleLoadCitiesWeather?.();
  }, [handleLoadCitiesWeather]);

  if (loading) return <ActivityIndicator testID="loading" />;
  if (error) return <CityWeatherError />;

  return (
    <FlatList
      ListHeaderComponent={CityWeatherListHeader}
      data={weather}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={loading as boolean}
          onRefresh={handleLoadCitiesWeather}
        />
      }
      keyExtractor={keyExtractor}
      stickyHeaderIndices={[0]}
      ItemSeparatorComponent={CityWeatherListItemSeparator}
    />
  );
}

export default CityWeatherListItems;

import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import CityWeatherListHeader from '../components/CityWeatherListHeader';
import {CityWeather} from '../types';
import CityWeatherListItemSeparator from '../components/CityWeatherListItemSeparator';
import CityWeatherItem from '../components/CityWeatherItem';
//TODO remove when api will be integrated
const data: CityWeather[] = [
  {id: 1, title: 'Test1', value: '50', description: 'test'},
  {id: 2, title: 'Test2', value: '60', description: 'test'},
];
const keyExtractor = (item: Pick<CityWeather, 'id'>) => item.id.toString();

function CityWeatherListItems() {
  const renderItem = useCallback(({item}: {item: CityWeather}) => {
    return <CityWeatherItem item={item} showChevron />;
  }, []);

  return (
    <FlatList
      ListHeaderComponent={CityWeatherListHeader}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      stickyHeaderIndices={[0]}
      ItemSeparatorComponent={CityWeatherListItemSeparator}
    />
  );
}

export default CityWeatherListItems;

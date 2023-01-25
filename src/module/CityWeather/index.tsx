import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import CityWeatherListItems from './pages/CityWeatherListItems';
import CityWeatherDetails from './pages/CityWeatherDetails';
import CityWeatherContext from './context/CityWeatherContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function WeatherScreen(): JSX.Element {
  return (
    <CityWeatherContext>
      <Stack.Navigator>
        <Stack.Screen
          name="CityWeatherListItems"
          component={CityWeatherListItems}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CityWeatherDetails"
          component={CityWeatherDetails}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </CityWeatherContext>
  );
}
export default WeatherScreen;

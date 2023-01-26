import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import * as CityWeatherContext from '../context/CityWeatherContext';
import CityWeatherListItems from '../pages/CityWeatherListItems';
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      setOptions: jest.fn(),
    }),
  };
});

const mockData = {
  id: 1,
  name: 'Lithuania',
  temperature: 10,
  icon: '01n',
  condition: 'Clouds',
  clouds: 100,
  windSpeed: 3,
  humidity: 6,
  pressure: 8,
};

it('should render CityWeatherListItems screen with correct values', async () => {
  jest.spyOn(CityWeatherContext, 'useCityWeatherContext').mockImplementation(
    // @ts-ignore
    jest.fn(() => ({
      weather: [mockData],
    })),
  );
  render(<CityWeatherListItems />);

  expect(screen.getByText(mockData.name)).toBeTruthy();
  expect(screen.getByText(mockData.condition)).toBeTruthy();

  const button = screen.queryByText(mockData.name);

  if (button) {
    fireEvent.press(button);
  }

  expect(mockedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedNavigate).toHaveBeenCalledWith('CityWeatherDetails', {
    id: mockData.id,
  });
});

it('should show loading indicator if api is loading data', async () => {
  jest.spyOn(CityWeatherContext, 'useCityWeatherContext').mockImplementation(
    // @ts-ignore
    jest.fn(() => ({
      weather: [mockData],
      loading: true,
    })),
  );
  render(<CityWeatherListItems />);

  expect(screen.getByTestId('loading')).toBeTruthy();
});

it('should show error info if api is returning error', async () => {
  jest.spyOn(CityWeatherContext, 'useCityWeatherContext').mockImplementation(
    // @ts-ignore
    jest.fn(() => ({
      weather: [mockData],
      loading: false,
      error: true,
    })),
  );
  render(<CityWeatherListItems />);

  expect(screen.getByTestId('error')).toBeTruthy();
});

import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import CityWeatherItem from '../components/CityWeatherItem';
import {ICON_URL} from '../api/constants';
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
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
it('should render CityWeatherItem with correct values', () => {
  render(<CityWeatherItem item={mockData} showChevron />);
  const name = screen.getByTestId('name');
  const condition = screen.getByTestId('condition');
  const image = screen.getByTestId('image');
  const chevron = screen.getByTestId('chevron');

  expect(name.props.children).toBe(mockData.name);
  expect(condition.props.children).toBe(mockData.condition);
  expect(image.props.source).toStrictEqual({
    uri: `${ICON_URL}${mockData.icon}.png`,
  });
  expect(chevron).toBeTruthy();
});

it('should not render chevron if enabling is not passing', () => {
  render(<CityWeatherItem item={mockData} />);
  const chevron = screen.queryByText('chevron');

  expect(chevron).toBeFalsy();
});

it('should redirect to CityWeatherDetails screen with correct id', () => {
  render(<CityWeatherItem item={mockData} showChevron />);
  const button = screen.queryByText(mockData.name);

  if (button) {
    fireEvent.press(button);
  }

  expect(mockedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedNavigate).toHaveBeenCalledWith('CityWeatherDetails', {
    id: mockData.id,
  });
});

import {render, screen} from '@testing-library/react-native';
import React from 'react';
import WeatherRowDetail from '../components/WeatherRowDetail';
it('should render WeatherRowDetail with correct params', () => {
  render(
    <WeatherRowDetail label="Humidity" testID="humidity" value={`100%`} />,
  );
  const humidity = screen.getByTestId('humidity');
  const label = screen.getByTestId('Humidity');
  expect(humidity.props.children).toBe('100%');
  expect(label.props.children).toBe('Humidity');
});

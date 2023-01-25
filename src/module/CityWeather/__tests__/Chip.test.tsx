import {render, screen} from '@testing-library/react-native';
import React from 'react';
import Chip from '../components/Chip';

it('should render chip with correct value', () => {
  render(<Chip value="10" />);
  const result = screen.getByText('10');
  expect(result).toBeTruthy();
});

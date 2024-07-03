import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DetailsScreen from '../DetailsScreen';
import {
  createMockNavigation,
  createMockRoute,
} from '../../src/test-utils/mockNavigation';

describe('DetailsScreen', () => {
  const navigation = createMockNavigation<'Details'>();
  const route = createMockRoute<'Details'>('Details');

  it('should render correctly', () => {
    const {getByText} = render(
      <DetailsScreen navigation={navigation} route={route} />,
    );
    expect(getByText('Details Screen')).toBeTruthy();
  });

  it('should navigate to Home screen on button press', () => {
    const {getByText} = render(
      <DetailsScreen navigation={navigation} route={route} />,
    );
    fireEvent.press(getByText('Go to Home'));
    expect(navigation.navigate).toHaveBeenCalledWith('Home');
  });
});

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import {
  createMockNavigation,
  createMockRoute,
} from '../../src/test-utils/mockNavigation';

describe('HomeScreen', () => {
  const navigation = createMockNavigation<'Home'>();
  const route = createMockRoute('Home');

  it('should render correctly', () => {
    const {getByText} = render(
      <HomeScreen navigation={navigation} route={route} />,
    );
    expect(getByText('Home Screen')).toBeTruthy();
  });

  it('should navigate to Details screen on button press', () => {
    const {getByText} = render(
      <HomeScreen navigation={navigation} route={route} />,
    );
    fireEvent.press(getByText('Go to Details'));
    expect(navigation.navigate).toHaveBeenCalledWith('Details');
  });
});

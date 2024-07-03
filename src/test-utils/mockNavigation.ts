import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';

type NavigationProp<T extends keyof RootStackParamList> = StackNavigationProp<
  RootStackParamList,
  T
>;

export const createMockNavigation = <
  T extends keyof RootStackParamList,
>(): NavigationProp<T> => ({
  navigate: jest.fn(),
  dispatch: jest.fn(),
  goBack: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  setOptions: jest.fn(),
  isFocused: jest.fn(),
  canGoBack: jest.fn(),
  dangerouslyGetParent: jest.fn(),
  dangerouslyGetState: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn(),
  getParent: jest.fn(),
});

type Route<T extends keyof RootStackParamList> = {
  key: string;
  name: T;
  params?: RootStackParamList[T];
};

export const createMockRoute = <T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T],
): Route<T> => ({
  key: 'some-key',
  name,
  params,
});

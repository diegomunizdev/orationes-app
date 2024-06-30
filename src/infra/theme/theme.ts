import { Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#2e476b',
    background: '#F1F1F1',
    card: '#FFFFFF',
    text: '#4D4D4D',
    border: '#E6E6E6',
    notification: '#E6E6E6',
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#89c2d9',
    background: '#1a1a1a',
    card: '#262626',
    text: '#FFFFFF',
    border: '#262626',
    notification: '#1d2d44',
  },
};

export enum FontSizeType {
  TEXT_12 = 12,
  TEXT_14 = 14,
  TEXT_16 = 16,
  TEXT_18 = 18,
  TEXT_20 = 20,
  TEXT_22 = 22,
  TEXT_24 = 24,
  TEXT_28 = 28,
  TEXT_32 = 32,
}

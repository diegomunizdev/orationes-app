import { RefObject } from 'react';
import { LayoutContextProps } from '../../contexts/layout/layout.context';
import { DrawerLayoutAndroid } from 'react-native';

export const mockLayoutProvider: LayoutContextProps = {
  theme: 'dark',
  handleTheme: jest.fn(),
  drawer: {
    current: { closeDrawer: jest.fn(), openDrawer: jest.fn() },
  } as unknown as RefObject<DrawerLayoutAndroid>,
  handleDrawer: jest.fn(),
};

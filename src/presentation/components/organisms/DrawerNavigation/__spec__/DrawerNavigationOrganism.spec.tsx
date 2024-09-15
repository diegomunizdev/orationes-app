import { fireEvent, render } from '@testing-library/react-native';
import DrawerNavigationOrganism, {
  DrawerNavigationOrganismProps,
} from '../DrawerNavigationOrganism';
import { RefObject } from 'react';
import { DrawerLayoutAndroid, StatusBar } from 'react-native';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

StatusBar.currentHeight = 10;
const mockCloseDrawer = jest.fn();
const mockNavigate = jest.fn();

const mockProps: DrawerNavigationOrganismProps = {
  drawer: {
    current: { closeDrawer: mockCloseDrawer },
  } as unknown as RefObject<DrawerLayoutAndroid>,
  navigation: { navigate: mockNavigate },
  theme: {
    dark: false,
    colors: {
      primary: '#000000',
      background: '#000000',
      card: '#000000',
      text: '#000000',
      border: '#000000',
      notification: '#000000',
    },
  },
};

describe('Given <DrawerNavigationOrganism/>', () => {
  const setup = (props: DrawerNavigationOrganismProps) =>
    render(<DrawerNavigationOrganism {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-DrawerNavigationOrganism-View');
    });

    it('Then a View should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-DrawerNavigationOrganism-TouchableOpacity');
    });

    describe('When options receive action', () => {
      it('Then you should trigger a function from navigate', () => {
        const { getAllByTestId } = setup(mockProps);
        const touchableOpacity = getAllByTestId(
          'orationes-DrawerNavigationOrganism-TouchableOpacity'
        );
        touchableOpacity.forEach((btn) => {
          fireEvent.press(btn);
          expect(mockNavigate).toHaveBeenCalled();
        });
      });

      it('Then you should trigger a function from close drawer', () => {
        const { getAllByTestId } = setup(mockProps);
        const touchableOpacity = getAllByTestId(
          'orationes-DrawerNavigationOrganism-TouchableOpacity'
        );
        touchableOpacity.forEach((btn) => {
          fireEvent.press(btn);
          expect(mockCloseDrawer).toHaveBeenCalled();
        });
      });
    });
  });
});

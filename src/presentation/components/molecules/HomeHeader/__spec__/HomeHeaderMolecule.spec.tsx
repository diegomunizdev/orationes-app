import { fireEvent, render } from '@testing-library/react-native';

import HomeHeaderMolecule, {
  HomeHeaderMoleculeProps,
} from '../HomeHeaderMolecule';
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    MaterialCommunityIcons: View,
  };
});

const mockDrawerNavigation = jest.fn();
const mockNavigateToSettings = jest.fn();

const mockProps: HomeHeaderMoleculeProps = {
  drawerNavigation: mockDrawerNavigation,
  navigateToSettings: mockNavigateToSettings,
};

describe('Given <HomeHeaderMolecule/>', () => {
  const { t } = useTranslation();
  const setup = (props: HomeHeaderMoleculeProps) =>
    render(<HomeHeaderMolecule {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HomeHeaderMolecule-View');
    });

    it('Then a title should appear', () => {
      const { getByText } = setup(mockProps);
      getByText(t('app'));
    });

    it('Then a drawerNavigation should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HomeHeaderMolecule-drawerNavigation');
    });

    it('Then a navigateToSettings should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HomeHeaderMolecule-navigateToSettings');
    });
  });

  describe('When the drawer navigation button is clicked', () => {
    it('Then it should trigger a function', () => {
      const { getByTestId } = setup(mockProps);
      const button = getByTestId(
        'orationes-HomeHeaderMolecule-drawerNavigation'
      );
      fireEvent.press(button);
      expect(mockDrawerNavigation).toHaveBeenCalled();
    });
  });

  describe('When the navigate to settings button is clicked', () => {
    it('Then it should trigger a function', () => {
      const { getByTestId } = setup(mockProps);
      const button = getByTestId(
        'orationes-HomeHeaderMolecule-navigateToSettings'
      );
      fireEvent.press(button);
      expect(mockNavigateToSettings).toHaveBeenCalled();
    });
  });
});

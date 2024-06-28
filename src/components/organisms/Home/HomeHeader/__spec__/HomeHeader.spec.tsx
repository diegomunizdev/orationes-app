import { render } from '@testing-library/react-native';

import HomeHeader, { HomeHeaderProps } from '../HomeHeader';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const mockDrawerNavigation = jest.fn();
const mockNavigateToSettings = jest.fn();

const mockProps: HomeHeaderProps = {
  drawerNavigation: mockDrawerNavigation,
  navigateToSettings: mockNavigateToSettings,
};

describe('Given <HomeHeader/>', () => {
  const setup = (props: HomeHeaderProps) => render(<HomeHeader {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HomeHeader-View');
    });

    it('Then a <HomeHeaderMolecule/> should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HomeHeaderMolecule-View');
    });
  });
});

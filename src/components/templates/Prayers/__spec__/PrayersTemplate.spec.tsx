// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';
import {
  LayoutContext,
  LayoutContextProps,
} from '../../../../application/contexts/layout/layout.context';
import { mockLayoutProvider } from '../../../../application/mocks/providers/LayoutProvider.mock';
import PrayersTemplate from '../PrayersTemplate';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const mockedNavigate = jest.fn();

jest.mock(
  '../../../../application/contexts/navigation/navigation.context',
  () => {
    const actualNav = jest.requireActual(
      '../../../../application/contexts/navigation/navigation.context'
    );
    return {
      ...actualNav,
      useNavigationContext: () => ({
        navigate: mockedNavigate,
      }),
    };
  }
);

describe('Given <HomeTemplate/>', () => {
  const setup = (mockLayoutProvider: LayoutContextProps) =>
    render(
      <LayoutContext.Provider value={mockLayoutProvider}>
        <NavigationContainer>
          <PrayersTemplate />
        </NavigationContainer>
      </LayoutContext.Provider>
    );

  describe('When the component is rendered', () => {
    it('Then a view should appear', async () => {
      const { getByTestId } = setup(mockLayoutProvider);
      getByTestId('orationes-ViewBase-View');
    });
  });

  describe('When the <HomeHeader/> component is rendered', () => {
    it('Then a view should appear', async () => {
      const { getByTestId } = setup(mockLayoutProvider);
      waitFor(() => {
        getByTestId('orationes-HomeHeader-View');
      });
    });

    it('Then a view should appear', async () => {
      const mockHandleDrawer = jest.fn();
      const { getByTestId } = setup({
        ...mockLayoutProvider,
        handleDrawer: mockHandleDrawer,
      });
      const btn = getByTestId('orationes-HomeHeaderMolecule-drawerNavigation');
      await act(async () => {
        fireEvent.press(btn);
      });
      waitFor(() => {
        expect(mockHandleDrawer).toHaveBeenCalled();
      });
    });

    it('Then a view should appear', async () => {
      const { getByTestId } = setup(mockLayoutProvider);
      const btn = getByTestId(
        'orationes-HomeHeaderMolecule-navigateToSettings'
      );
      await act(async () => {
        fireEvent.press(btn);
      });
      waitFor(() => {
        expect(mockedNavigate).toHaveBeenCalled();
      });
    });
  });
});

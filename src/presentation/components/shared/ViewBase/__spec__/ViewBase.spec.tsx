import { NavigationContainer } from '@react-navigation/native';
import { act, fireEvent, render } from '@testing-library/react-native';

import ViewBase from '../ViewBase';
import { LayoutContext } from '../../../../../application/contexts/layout/layout.context';
import { mockLayoutProvider } from '../../../../../application/mocks/providers/LayoutProvider.mock';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const mockedNavigate = jest.fn();
const mockHandleDrawer = jest.fn();

jest.mock(
  '../../../../../application/contexts/navigation/navigation.context',
  () => ({
    useNavigationContext: () => ({ navigate: mockedNavigate }),
  })
);

describe('Given <ViewBase/>', () => {
  const setup = () =>
    render(
      <LayoutContext.Provider
        value={{ ...mockLayoutProvider, handleDrawer: mockHandleDrawer }}
      >
        <NavigationContainer>
          <ViewBase />
        </NavigationContainer>
      </LayoutContext.Provider>
    );

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getAllByTestId } = setup();
      getAllByTestId('orationes-ViewBase-View');
    });

    describe('When <HomeHeader/> is renderer', () => {
      it('Then a View should appear', () => {
        const { getAllByTestId } = setup();
        getAllByTestId('orationes-HomeHeaderMolecule-View');
      });

      it('Then a view should appear', async () => {
        const { getByTestId } = setup();
        const btn = getByTestId(
          'orationes-HomeHeaderMolecule-drawerNavigation'
        );
        await act(async () => {
          fireEvent.press(btn);
        });
        expect(mockHandleDrawer).toHaveBeenCalled();
      });

      it('Then a view should appear', async () => {
        const { getByTestId } = setup();
        const btn = getByTestId(
          'orationes-HomeHeaderMolecule-navigateToSettings'
        );

        await act(async () => {
          fireEvent.press(btn);
        });
        expect(mockedNavigate).toHaveBeenCalled();
      });
    });
  });
});

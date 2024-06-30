import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import SettingsTemplate from '../SettingsTemplate';
import { NavigationContainer } from '@react-navigation/native';

const mockGoBack = jest.fn();
const mockedNavigate = jest.fn();

jest.mock(
  '../../../../application/contexts/navigation/navigation.context',
  () => {
    const actualNav = jest.requireActual(
      '../../../../application/contexts/navigation/navigation.context'
    );
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: mockedNavigate,
        goBack: mockGoBack,
      }),
    };
  }
);

describe('Given <SettingsTemplate/>', () => {
  const setup = () =>
    render(
      <NavigationContainer>
        <SettingsTemplate />
      </NavigationContainer>
    );

  describe('When the component is renderer', () => {
    it('Then a ScrollView should appear', () => {
      const { getByTestId } = setup();
      getByTestId('orationes-SettingsTemplate-ScrollView');
    });

    describe('When the <Header/> is rendered', () => {
      it('Then a view should appear', () => {
        const { getByTestId } = setup();
        getByTestId('orationes-Header-View');
      });

      it('Then you should trigger an action by clicking the back button', async () => {
        const { getByTestId } = setup();
        const btn = getByTestId('orations-Header-goBack');
        await act(async () => fireEvent.press(btn));
        waitFor(() => {
          expect(mockGoBack).toHaveBeenCalled();
        });
      });
    });

    describe('When the <SettingsOptionOrganism/> is renderer', () => {
      it('Then a TouchableOpacity should appear', () => {
        const { getAllByTestId } = setup();
        getAllByTestId('orationes-SettingsOption-View');
      });

      it('Then a function must be triggered', async () => {
        const { getAllByTestId } = setup();
        const btn = getAllByTestId('orationes-SettingsOption-TouchableOpacity');
        await act(async () => {
          btn.forEach(async (btnItem: any) => {
            fireEvent.press(btnItem);
          });
        });
        waitFor(() => {
          expect(mockedNavigate).toHaveBeenCalled();
        });
      });
    });
  });
});

// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';

import HomeTemplate from '../HomeTemplate';
import {
  HomeContext,
  HomeContextProps,
} from '../../../../application/contexts/home/home.context';
import { mockHomeProvider } from '../../../../application/mocks/providers/HomeProvider.mock';
import { NavigationContainer } from '@react-navigation/native';
import { LiturgicalColorType } from '../../../../domain/enums/Liturgy';
import {
  LayoutContext,
  LayoutContextProps,
} from '../../../../application/contexts/layout/layout.context';
import { mockLayoutProvider } from '../../../../application/mocks/providers/LayoutProvider.mock';

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
      useNavigation: () => ({
        navigate: mockedNavigate,
      }),
    };
  }
);

describe('Given <HomeTemplate/>', () => {
  const setup = (
    mockHomeProvider: HomeContextProps,
    mockLayoutProvider: LayoutContextProps
  ) =>
    render(
      <LayoutContext.Provider value={mockLayoutProvider}>
        <NavigationContainer>
          <HomeContext.Provider value={mockHomeProvider}>
            <HomeTemplate />
          </HomeContext.Provider>
        </NavigationContainer>
      </LayoutContext.Provider>
    );

  describe('When the component is rendered', () => {
    it('Then a view should appear', async () => {
      const { getByTestId } = setup(mockHomeProvider, mockLayoutProvider);
      getByTestId('orationes-HomeTemplate-View');
    });
  });

  describe('When the <HomeHeader/> component is rendered', () => {
    it('Then a view should appear', async () => {
      const { getByTestId } = setup(mockHomeProvider, mockLayoutProvider);
      waitFor(() => {
        getByTestId('orationes-HomeHeader-View');
      });
    });

    it('Then a view should appear', async () => {
      const mockHandleDrawer = jest.fn();
      const { getByTestId } = setup(mockHomeProvider, {
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
      const { getByTestId } = setup(mockHomeProvider, mockLayoutProvider);
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

  describe('When the loading for true', () => {
    it('Then a <Loading/> should appear', async () => {
      const { getByTestId } = setup(
        {
          ...mockHomeProvider,
          loading: true,
          error: false,
          data: undefined,
        },
        mockLayoutProvider
      );
      waitFor(() => {
        getByTestId('loading-app');
      });
    });
  });

  describe('When the error for true', () => {
    it('Then a <Error/> should appear', async () => {
      const { getByTestId } = setup(
        {
          ...mockHomeProvider,
          loading: false,
          error: true,
          data: undefined,
        },
        mockLayoutProvider
      );
      waitFor(() => {
        getByTestId('orationes-Error-View');
      });
    });

    it('Then it should trigger a function when the action is clicked', async () => {
      const mockHandleDailyLiturgy = jest.fn();
      const { getByTestId } = setup(
        {
          ...mockHomeProvider,
          loading: false,
          error: true,
          data: undefined,
          handleDailyLiturgy: mockHandleDailyLiturgy,
        },
        mockLayoutProvider
      );
      const btn = getByTestId('orationes-Button-TouchableOpacity');
      fireEvent.press(btn);
      expect(mockHandleDailyLiturgy).toHaveBeenCalled();
    });
  });

  describe('When to return data', () => {
    it('Then the data should appear', async () => {
      const { getByTestId } = setup(
        {
          ...mockHomeProvider,
          loading: false,
          error: false,
          data: mockHomeProvider?.data,
        },
        mockLayoutProvider
      );
      waitFor(() => {
        getByTestId('orationes-HomeTemplate-data');
      });
    });
  });

  describe(`When to don't return data`, () => {
    it('Then the data should not appear', async () => {
      const { queryByTestId } = setup(
        {
          ...mockHomeProvider,
          loading: false,
          error: false,
          data: undefined,
        },
        mockLayoutProvider
      );
      await act(async () => {
        expect(queryByTestId('orationes-HomeTemplate-data')).toBeNull();
      });
    });
  });

  describe('When the initial route is primaryReading', () => {
    it('Then a <PrimaryReading/> component should appear', async () => {
      const { getByTestId, getByText } = setup(
        {
          ...mockHomeProvider,
          loading: false,
          error: false,
          data: mockHomeProvider.data,
        },
        mockLayoutProvider
      );
      await act(async () => {
        fireEvent.press(getByText('1º leitura'));
      });
      waitFor(() => {
        getByTestId('orationes-PrimaryReading-ScrollView');
      });
    });
  });

  describe('When the initial route is secondReading', () => {
    it('Then a <SecondReading/> component should appear', async () => {
      const { getByTestId, getByText } = setup(
        {
          ...mockHomeProvider,
          loading: false,
          error: false,
          data: mockHomeProvider?.data,
        },
        mockLayoutProvider
      );
      await act(async () => {
        fireEvent.press(getByText('2º leitura'));
      });
      waitFor(() => {
        getByTestId('orationes-SecondReading-ScrollView');
      });
    });
  });

  describe('When there is no second reading', () => {
    it('Then it should not appear the <SecondReading/>', async () => {
      const { queryByText } = setup(
        {
          ...mockHomeProvider,
          data: {
            data: new Date().toISOString(),
            liturgia: '6ª feira da 7ª Semana do Tempo Comum',
            cor: LiturgicalColorType.GREEN,
            dia: 'mock dia',
            oferendas: 'mock oferendas',
            comunhao: 'mock comunhao',
            primeiraLeitura: {
              referencia: 'mock reference',
              titulo: 'mock title',
              texto: 'mock texto',
            },
            segundaLeitura: undefined,
            salmo: {
              referencia: 'mock reference',
              refrao: 'mock refrao',
              texto: 'mock texto',
            },
            evangelho: {
              referencia: 'mock reference',
              titulo: 'mock title',
              texto: 'mock texto',
            },
          },
        },
        mockLayoutProvider
      );
      waitFor(() => {
        expect(queryByText('2º leitura')).toBeNull();
      });
    });
  });

  describe('When the initial route is psalms', () => {
    it('Then a <Psalms/> component should appear', async () => {
      const { getByTestId, getByText } = setup(
        {
          ...mockHomeProvider,
          data: {
            data: undefined,
            liturgia: '6ª feira da 7ª Semana do Tempo Comum',
            cor: undefined,
            dia: 'mock dia',
            oferendas: 'mock oferendas',
            comunhao: 'mock comunhao',
            primeiraLeitura: {
              referencia: 'mock reference',
              titulo: 'mock title',
              texto: 'mock texto',
            },
            segundaLeitura: undefined,
            salmo: {
              referencia: 'mock reference',
              refrao: 'mock refrao',
              texto: 'mock texto',
            },
            evangelho: {
              referencia: 'mock reference',
              titulo: 'mock title',
              texto: 'mock texto',
            },
          },
        },
        mockLayoutProvider
      );
      await act(async () => {
        fireEvent.press(getByText('Salmos'));
      });
      waitFor(() => {
        getByTestId('orationes-Psalms-ScrollView');
      });
    });
  });

  describe('When the initial route is gospel', () => {
    it('Then a <Gospel/> component should appear', async () => {
      const { getByTestId, getByText } = setup(
        {
          ...mockHomeProvider,
          data: {
            data: undefined,
            liturgia: '6ª feira da 7ª Semana do Tempo Comum',
            cor: undefined,
            dia: 'mock dia',
            oferendas: 'mock oferendas',
            comunhao: 'mock comunhao',
            primeiraLeitura: {
              referencia: 'mock reference',
              titulo: 'mock title',
              texto: 'mock texto',
            },
            segundaLeitura: undefined,
            salmo: {
              referencia: 'mock reference',
              refrao: 'mock refrao',
              texto: 'mock texto',
            },
            evangelho: {
              referencia: 'mock reference',
              titulo: 'mock title',
              texto: 'mock texto',
            },
          },
        },
        mockLayoutProvider
      );
      await act(async () => {
        fireEvent.press(getByText('Evangelho'));
      });
      waitFor(() => {
        getByTestId('orationes-Gospel-ScrollView');
      });
    });
  });
});

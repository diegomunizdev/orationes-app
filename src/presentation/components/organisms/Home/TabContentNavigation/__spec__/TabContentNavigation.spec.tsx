import {
  act,
  fireEvent,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react-native';

import TabContentNavigation, {
  TabContentNavigationProps,
} from '../TabContentNavigation';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { mockHomeProvider } from '../../../../../../application/mocks/providers/HomeProvider.mock';
import { darkTheme } from '../../../../../../infra/theme/theme';
import { LiturgicalColorType } from '../../../../../../domain/enums/Liturgy';

const mockProps: TabContentNavigationProps = {
  dailyLiturgy: mockHomeProvider.data,
};

describe('Given <TabContentNavigation/>', () => {
  const setup = (props: TabContentNavigationProps) =>
    render(
      <NavigationContainer theme={darkTheme}>
        <TabContentNavigation {...props} />
      </NavigationContainer>
    );

  beforeEach(() => {
    jest.clearAllMocks();
    renderHook(useTheme);
  });

  describe('When the initial route is primaryReading', () => {
    it('Then the home screen should appear', async () => {
      const { getByTestId } = setup(mockProps);
      waitFor(() => {
        getByTestId('orationes-PrimaryReading-ScrollView');
      });
    });
  });

  describe('When the initial route is secondReading', () => {
    it('Then the second reading route should appear', async () => {
      const { getByTestId, queryByText } = setup(mockProps);
      await act(async () => {
        fireEvent.press(queryByText('2º leitura'));
      });
      waitFor(() => {
        getByTestId('orationes-SecondReading-ScrollView');
      });
    });
  });

  describe('When there is no second reading', () => {
    it(`Then you shouldn't see the second reading option`, async () => {
      const { queryByText } = setup({
        dailyLiturgy: {
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
      });
      waitFor(() => {
        expect(queryByText('2º leitura')).toBeNull();
      });
    });
  });

  describe('When the initial route is psalms', () => {
    it('Then it must begin with the psalms', async () => {
      const { getByTestId, queryByText } = setup(mockProps);
      await act(async () => {
        fireEvent.press(queryByText('Salmos'));
      });
      waitFor(() => {
        getByTestId('orationes-Psalms-ScrollView');
      });
    });
  });

  describe('When the initial route is gospel', () => {
    it('Then you must initiate into the gospel', async () => {
      const { getByTestId, queryByText } = setup(mockProps);
      await act(async () => {
        fireEvent.press(queryByText('Evangelho'));
      });
      waitFor(() => {
        getByTestId('orationes-Gospel-ScrollView');
      });
    });
  });
});

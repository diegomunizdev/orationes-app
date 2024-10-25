import { render } from '@testing-library/react-native';
import DailyLiturgyHeader, {
  DailyLiturgyHeaderProps,
} from '../DailyLiturgyHeader';
import { dailyLiturgyMock } from '../../../../../../application/mocks/dailyLiturgy/dailyLiturgy.mock';

const mockProps: DailyLiturgyHeaderProps = {
  dailyLiturgy: dailyLiturgyMock,
};

describe('Given <DailyLiturgyHeader/>', () => {
  const setup = (props: DailyLiturgyHeaderProps) =>
    render(<DailyLiturgyHeader {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-DailyLiturgyHeader-View');
    });

    describe('When the <DateLiturgy/> is renderer', () => {
      it('Then a View should appear', () => {
        const { getByTestId } = setup(mockProps);
        getByTestId('orationes-DateLiturgy-View');
      });

      it('Then a View should appear', () => {
        const { getByTestId } = setup({
          ...mockProps,
          dailyLiturgy: {
            ...dailyLiturgyMock,
            data: undefined,
          },
        });
        getByTestId('orationes-DateLiturgy-View');
      });
    });

    describe('When the <LiturgicalColorDay/> is renderer', () => {
      it('Then a View should appear', () => {
        const { getByTestId } = setup(mockProps);
        getByTestId('orationes-LiturgicalColorDay-View');
      });

      it('Then it should be white when it has no color.', () => {
        const { getByTestId } = setup({
          ...mockProps,
          dailyLiturgy: {
            ...dailyLiturgyMock,
            cor: undefined,
          },
        });
        getByTestId('orationes-LiturgicalColorDay-View');
      });
    });
  });
});

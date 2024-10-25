import { render } from '@testing-library/react-native';
import DateLiturgy, { DateLiturgyProps } from '../DateLiturgy';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: jest.fn((str: string) => str),
    };
  },
}));

const mockProps: DateLiturgyProps = {
  date: new Date().toISOString(),
  liturgy: 'liturgy',
};

describe('Given <DateLiturgy/>', () => {
  const setup = (props: DateLiturgyProps) => render(<DateLiturgy {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-DateLiturgy-View');
    });

    it('Then a dateFormated should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-DateLiturgy-dateFormated');
    });

    it('Then a liturgy should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-DateLiturgy-liturgy');
    });
  });

  describe('When the date is undefined', () => {
    it('Then a View should appear', () => {
      const { getByText } = setup({ ...mockProps, date: undefined });
      getByText('-');
    });
  });
});

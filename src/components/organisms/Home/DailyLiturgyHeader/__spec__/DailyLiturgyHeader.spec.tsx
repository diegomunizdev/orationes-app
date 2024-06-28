import { render } from '@testing-library/react-native';
import DailyLiturgyHeader, {
  DailyLiturgyHeaderProps,
} from '../DailyLiturgyHeader';

const mockProps: DailyLiturgyHeaderProps = {
  dailyLiturgy: undefined,
};

describe('Given <DailyLiturgyHeader/>', () => {
  const setup = (props: DailyLiturgyHeaderProps) =>
    render(<DailyLiturgyHeader {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-DailyLiturgyHeader-View');
    });
  });
});

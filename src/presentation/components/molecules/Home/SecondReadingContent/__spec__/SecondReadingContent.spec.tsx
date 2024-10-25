import { render } from '@testing-library/react-native';
import SecondReadingContent, {
  SecondReadingContentProps,
} from '../SecondReadingContent';

const mockProps: SecondReadingContentProps = {
  secondReading: undefined,
};

describe('Given <SecondReadingContent/>', () => {
  const setup = (props: SecondReadingContentProps) =>
    render(<SecondReadingContent {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-SecondReadingContent-View');
    });

    it('Then a <TextLiturgy/> should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-TextLiturgy-Text');
    });
  });
});

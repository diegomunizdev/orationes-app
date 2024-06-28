import { render } from '@testing-library/react-native';
import SecondReadingContent, {
  SecondReadingContentProps,
} from '../SecondReadingContent';
import { FontSizeType } from '../../../../../infra/theme/theme';

const mockProps: SecondReadingContentProps = {
  secondReading: undefined,
  fontSize: FontSizeType.TEXT_24,
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

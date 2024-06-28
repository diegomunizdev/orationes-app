import { render } from '@testing-library/react-native';
import SecondReading, { SecondReadingProtocolProps } from '../SecondReading';
import { FontSizeType } from '../../../../../infra/theme/theme';

const mockProps: SecondReadingProtocolProps = {
  secondReading: undefined,
  fontSize: FontSizeType.TEXT_24,
};

describe('Given <SecondReading/>', () => {
  const setup = (props: SecondReadingProtocolProps) =>
    render(<SecondReading {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-SecondReading-ScrollView');
    });

    it('Then a <TextLiturgy/> should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-TextLiturgy-Text');
    });
  });
});

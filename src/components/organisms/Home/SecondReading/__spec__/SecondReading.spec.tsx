import { render } from '@testing-library/react-native';
import SecondReading, { SecondReadingProtocolProps } from '../SecondReading';

const mockProps: SecondReadingProtocolProps = {
  secondReading: undefined,
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

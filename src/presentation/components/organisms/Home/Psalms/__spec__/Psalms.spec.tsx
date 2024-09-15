import { render } from '@testing-library/react-native';
import Psalms, { PsalmsProps } from '../Psalms';

const mockProps: PsalmsProps = {
  psalms: undefined,
};

describe('Given <Psalms/>', () => {
  const setup = (props: PsalmsProps) => render(<Psalms {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Psalms-ScrollView');
    });

    it('Then a <TextLiturgy/> should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-TextLiturgy-Text');
    });
  });
});

import { render } from '@testing-library/react-native';
import Psalms, { PsalmsProps } from '../Psalms';
import { FontSizeType } from '../../../../../infra/theme/theme';

const mockProps: PsalmsProps = {
  psalms: undefined,
  fontSize: FontSizeType.TEXT_24,
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

import { render } from '@testing-library/react-native';
import PsalmsContent, { PsalmsContentProps } from '../PsalmsContent';
import { FontSizeType } from '../../../../../infra/theme/theme';

const mockProps: PsalmsContentProps = {
  psalms: undefined,
  fontSize: FontSizeType.TEXT_24,
};

describe('Given <Gospel/>', () => {
  const setup = (props: PsalmsContentProps) =>
    render(<PsalmsContent {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-PsalmsContent-View');
    });

    it('Then a <TextLiturgy/> should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-TextLiturgy-Text');
    });
  });
});

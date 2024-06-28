import { render } from '@testing-library/react-native';
import GospelContent, { GospelContentProps } from '../GospelContent';
import { FontSizeType } from '../../../../../infra/theme/theme';

const mockProps: GospelContentProps = {
  gospel: undefined,
  fontSize: FontSizeType.TEXT_24,
};

describe('Given <Gospel/>', () => {
  const setup = (props: GospelContentProps) =>
    render(<GospelContent {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-GospelContent-View');
    });

    it('Then a <TextLiturgy/> should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-TextLiturgy-Text');
    });
  });
});

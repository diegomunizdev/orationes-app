import { render } from '@testing-library/react-native';
import GospelContent, { GospelContentProps } from '../GospelContent';

const mockProps: GospelContentProps = {
  gospel: undefined,
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

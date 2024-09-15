import { render } from '@testing-library/react-native';

import PrimaryReadingContent, {
  PrimaryReadingContentProps,
} from '../PrimaryReadingContent';

const mockProps: PrimaryReadingContentProps = {
  primaryReading: undefined,
};

describe('Given <PrimaryReading/>', () => {
  const setup = (props: PrimaryReadingContentProps) =>
    render(<PrimaryReadingContent {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-PrimaryReadingContent-View');
    });

    it('Then a <TextLiturgy/> should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-TextLiturgy-Text');
    });
  });
});

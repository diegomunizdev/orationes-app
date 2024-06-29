import { render } from '@testing-library/react-native';

import FontSizeInfoMolecule from '../FontSizeInfoMolecule';

describe('Given <FontSizeInfoMolecule/>', () => {
  const setup = () => render(<FontSizeInfoMolecule />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('orationes-FontSizeInfoMolecule-View');
    });

    it('Then a icon should appear', () => {
      const { getByTestId } = setup();
      getByTestId('orationes-FontSizeInfoMolecule-icon');
    });

    it('Then a text should appear', () => {
      const { getByTestId } = setup();
      getByTestId('orationes-FontSizeInfoMolecule-text');
    });
  });
});

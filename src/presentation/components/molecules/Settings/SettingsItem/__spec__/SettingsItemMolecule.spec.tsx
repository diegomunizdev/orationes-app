import { render } from '@testing-library/react-native';
import SettingsItemMolecule, {
  SettingsItemMoleculeProps,
} from '../SettingsItemMolecule';

const mockProps: SettingsItemMoleculeProps = {
  title: 'title',
  subtitle: 'subtitle',
};

describe('Given <SettingsItemMolecule/>', () => {
  const setup = (props: SettingsItemMoleculeProps) =>
    render(<SettingsItemMolecule {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-SettingsItem-View');
    });

    it('Then a title should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-SettingsItem-title');
    });

    it('Then a subtitle should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-SettingsItem-subtitle');
    });
  });
});

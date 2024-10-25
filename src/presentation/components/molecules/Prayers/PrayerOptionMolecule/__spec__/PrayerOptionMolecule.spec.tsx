import { render } from '@testing-library/react-native';
import PrayerOptionMolecule, {
  PrayerOptionOrganismProps,
} from '../PrayerOptionMolecule';

const mockProps: PrayerOptionOrganismProps = {
  title: 'title',
  description: 'description',
};

describe('Given <PrayerOptionMolecule/>', () => {
  const setup = (props: PrayerOptionOrganismProps) =>
    render(<PrayerOptionMolecule {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-PrayerOptionMolecule-View');
    });

    it('Then a title should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-PrayerOptionMolecule-title');
    });

    it('Then a description should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-PrayerOptionMolecule-description');
    });
  });
});

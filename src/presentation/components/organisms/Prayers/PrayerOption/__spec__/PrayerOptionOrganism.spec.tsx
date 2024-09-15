import { fireEvent, render } from '@testing-library/react-native';
import PrayerOptionOrganism, {
  PrayerOptionOrganismProps,
} from '../PrayerOptionOrganism';

const mockAction = jest.fn();

const mockProps: PrayerOptionOrganismProps = {
  title: 'title',
  description: 'description',
  action: mockAction,
};

describe('Given <PrayerOptionOrganism/>', () => {
  const setup = (props: PrayerOptionOrganismProps) =>
    render(<PrayerOptionOrganism {...props} />);

  describe('When the component is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-PrayerOptionOrganism-TouchableOpacity');
    });

    it('Then a content should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-PrayerOptionOrganism-View');
    });

    it('Then <PrayerOptionMolecule/> should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-PrayerOptionMolecule-View');
    });

    describe('When option receive action', () => {
      it('Then a function must be triggered', () => {
        const { getByTestId } = setup(mockProps);
        const touchableOpacity = getByTestId(
          'orationes-PrayerOptionOrganism-TouchableOpacity'
        );
        fireEvent.press(touchableOpacity);
        expect(mockAction).toHaveBeenCalled();
      });
    });
  });
});

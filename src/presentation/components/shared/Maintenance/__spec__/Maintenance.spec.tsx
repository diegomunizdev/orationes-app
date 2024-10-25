import React from 'react';
import { render } from '@testing-library/react-native';

import Maintenance, { MaintenanceProps } from '../Maintenance';

const mockProps: MaintenanceProps = {
  title: 'title',
  subtitle: 'subtitle',
};

describe('Given <Maintenance/>', () => {
  const setup = (props: MaintenanceProps) => render(<Maintenance {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Maintenance-View');
    });

    it('Then a title should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Maintenance-title');
    });

    it('Then a subtitle should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Maintenance-subtitle');
    });
  });
});

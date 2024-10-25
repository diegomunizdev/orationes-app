import React from 'react';
import { render } from '@testing-library/react-native';
import MaintenanceTemplate from '../MaintenanceTemplate';

describe('Given <Maintenance/>', () => {
  const setup = () => render(<MaintenanceTemplate />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('orationes-MaintenanceTemplate-View');
    });

    describe('When the <Maintenance/> is renderer', () => {
      it('Then a View should appear', () => {
        const { getByTestId } = setup();
        getByTestId('orationes-Maintenance-View');
      });

      it('Then a title should appear', () => {
        const { getByTestId } = setup();
        getByTestId('orationes-Maintenance-title');
      });

      it('Then a subtitle should appear', () => {
        const { getByTestId } = setup();
        getByTestId('orationes-Maintenance-subtitle');
      });
    });
  });
});

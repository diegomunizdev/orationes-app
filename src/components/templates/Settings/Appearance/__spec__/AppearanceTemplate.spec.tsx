import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import AppearanceTemplate from '../AppearanceTemplate';
import { LayoutContext } from '../../../../../application/contexts/layout/layout.context';
import { mockLayoutProvider } from '../../../../../application/mocks/providers/LayoutProvider.mock';
import { AppearanceContext } from '../../../../../application/contexts/settings/appearance/appearance.context';
import { mockAppearanceContext } from '../../../../../application/mocks/providers/AppearanceProvider.mock';

const mockGoBack = jest.fn();

jest.mock(
  '../../../../../application/contexts/navigation/navigation.context',
  () => {
    const actualNav = jest.requireActual(
      '../../../../../application/contexts/navigation/navigation.context'
    );
    return {
      ...actualNav,
      useNavigationContext: () => ({
        goBack: mockGoBack,
      }),
    };
  }
);

const mockHandleTheme = jest.fn();
const mockHandleModalTheme = jest.fn();

describe('Given <AppearanceTemplate/>', () => {
  const setup = () =>
    render(
      <LayoutContext.Provider
        value={{
          ...mockLayoutProvider,
          handleTheme: mockHandleTheme,
        }}
      >
        <AppearanceContext.Provider
          value={{
            ...mockAppearanceContext,
            handleModalTheme: mockHandleModalTheme,
          }}
        >
          <AppearanceTemplate />
        </AppearanceContext.Provider>
      </LayoutContext.Provider>
    );

  describe('When the component is rendered', () => {
    it('Then the scrollview should not appear', () => {
      const { getByTestId } = setup();
      getByTestId('orationes-AppearanceTemplate-ScrollView');
    });

    describe('When the <AppearanceOptionOrganism/> is rendered', () => {
      it('Then the <AppearanceOptionOrganism/> should not appear', () => {
        const { getAllByTestId } = setup();
        getAllByTestId('orationes-AppearanceOptionOrganism-View');
      });

      it('Then a function handleModalTheme must be triggered', () => {
        const { getAllByTestId } = setup();
        const btn = getAllByTestId('orationes-AppearanceOptionOrganism-action');
        btn.forEach((btnItem) => {
          fireEvent.press(btnItem);
          expect(mockHandleModalTheme).toHaveBeenCalled();
        });
      });
    });

    describe('When the <Header/> is rendered', () => {
      it('Then a view should appear', () => {
        const { getByTestId } = setup();
        getByTestId('orationes-Header-View');
      });

      it('Then you should trigger an action by clicking the back button', () => {
        const { getByTestId } = setup();
        const btn = getByTestId('orations-Header-goBack');
        fireEvent.press(btn);
        expect(mockGoBack).toHaveBeenCalled();
      });
    });

    describe('When the light touchable opacity receives an action', () => {
      it('Then should trigger an action to change theme', () => {
        const { getByTestId } = setup();
        const btn = getByTestId('orationes-HandleActionsThemeMolecule-light');
        fireEvent.press(btn);
        expect(mockHandleTheme).toHaveBeenCalled();
      });

      it('Then should trigger an action to close the modal', () => {
        const { getByTestId } = setup();
        const btn = getByTestId('orationes-HandleActionsThemeMolecule-light');
        fireEvent.press(btn);
        expect(mockHandleModalTheme).toHaveBeenCalled();
      });
    });

    describe('When the dark touchable opacity receives an action', () => {
      it('Then should trigger an action to change theme', () => {
        const { getByTestId } = setup();
        const btn = getByTestId('orationes-HandleActionsThemeMolecule-dark');
        fireEvent.press(btn);
        expect(mockHandleTheme).toHaveBeenCalled();
      });

      it('Then should trigger an action to close the modal', () => {
        const { getByTestId } = setup();
        const btn = getByTestId('orationes-HandleActionsThemeMolecule-dark');
        fireEvent.press(btn);
        expect(mockHandleModalTheme).toHaveBeenCalled();
      });
    });
  });
});

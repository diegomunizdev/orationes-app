import { lazy, Suspense } from 'react';

import LoadingFallback from '../../shared/Loading/LoadingFallback';
import SettingsProvider from '../../providers/Settings/Settings.provider';

const SettingsTemplate = lazy(
  () => import('../../templates/Settings/SettingsTemplate')
);

export default function SettingsView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SettingsProvider>
        <SettingsTemplate />
      </SettingsProvider>
    </Suspense>
  );
}

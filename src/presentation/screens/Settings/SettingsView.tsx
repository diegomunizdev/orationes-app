import { lazy, Suspense } from 'react';
import SettingsProvider from '../../components/providers/Settings/Settings.provider';
import LoadingFallback from '../../components/shared/Loading/LoadingFallback';

const SettingsTemplate = lazy(
  () => import('../../components/templates/Settings/SettingsTemplate')
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

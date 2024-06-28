import { lazy, Suspense } from 'react';
import LoadingFallback from '../../shared/Loading/LoadingFallback';

const SettingsTemplate = lazy(
  () => import('../../templates/Settings/SettingsTemplate')
);

export default function SettingsView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SettingsTemplate />
    </Suspense>
  );
}

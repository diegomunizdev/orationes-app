import { lazy, Suspense } from 'react';
import LoadingFallback from '../../../shared/Loading/LoadingFallback';
import AppearanceProvider from '../../../providers/Settings/Appearance/Appearance.provider';

const AppearanceTemplate = lazy(
  () => import('../../../templates/Settings/Appearance/AppearanceTemplate')
);

export default function AppearanceView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AppearanceProvider>
        <AppearanceTemplate />
      </AppearanceProvider>
    </Suspense>
  );
}

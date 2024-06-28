import { lazy, Suspense } from 'react';
import LoadingFallback from '../../../shared/Loading/LoadingFallback';

const AppearanceTemplate = lazy(
  () => import('../../../templates/Settings/Appearance/AppearanceTemplate')
);

export default function AppearanceView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AppearanceTemplate />
    </Suspense>
  );
}

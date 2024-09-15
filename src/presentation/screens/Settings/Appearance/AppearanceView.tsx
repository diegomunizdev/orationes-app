import { lazy, Suspense } from 'react';
import LoadingFallback from '../../../components/shared/Loading/LoadingFallback';
import AppearanceProvider from '../../../components/providers/Settings/Appearance/Appearance.provider';

const AppearanceTemplate = lazy(
  () =>
    import(
      '../../../components/templates/Settings/Appearance/AppearanceTemplate'
    )
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

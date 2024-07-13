import { Suspense } from 'react';
import LoadingFallback from '../../../shared/Loading/LoadingFallback';
import AppearanceProvider from '../../../providers/Settings/Appearance/Appearance.provider';
import AppearanceTemplate from '../../../templates/Settings/Appearance/AppearanceTemplate';

export default function AppearanceView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AppearanceProvider>
        <AppearanceTemplate />
      </AppearanceProvider>
    </Suspense>
  );
}

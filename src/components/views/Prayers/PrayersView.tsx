import { lazy, Suspense } from 'react';
import LoadingFallback from '../../shared/Loading/LoadingFallback';

const PrayersTemplate = lazy(
  () => import('../../templates/Prayers/PrayersTemplate')
);

export default function PrayersView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PrayersTemplate />
    </Suspense>
  );
}

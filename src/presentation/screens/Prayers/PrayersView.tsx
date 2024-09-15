import { lazy, Suspense } from 'react';
import LoadingFallback from '../../components/shared/Loading/LoadingFallback';

const PrayersTemplate = lazy(
  () => import('../../components/templates/Prayers/PrayersTemplate')
);

export default function PrayersView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PrayersTemplate />
    </Suspense>
  );
}

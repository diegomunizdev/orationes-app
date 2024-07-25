import { Suspense } from 'react';
import LoadingFallback from '../../shared/Loading/LoadingFallback';
import PrayersTemplate from '../../templates/Prayers/PrayersTemplate';

export default function PrayersView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PrayersTemplate />
    </Suspense>
  );
}

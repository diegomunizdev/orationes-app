import { lazy, Suspense } from 'react';
import LoadingFallback from '../../shared/Loading/LoadingFallback';

const EucharisticMiraclesTemplate = lazy(
  () =>
    import('../../templates/EucharisticMiracles/EucharisticMiraclesTemplate')
);

export default function EucharisticMiraclesView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <EucharisticMiraclesTemplate />
    </Suspense>
  );
}

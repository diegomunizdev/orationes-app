import { lazy, Suspense } from 'react';
import LoadingFallback from '../../shared/Loading/LoadingFallback';
import HomeProvider from '../../providers/Home/Home.provider';

const HomeTemplate = lazy(() => import('../../templates/Home/HomeTemplate'));

export default function HomeView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomeProvider>
        <HomeTemplate />
      </HomeProvider>
    </Suspense>
  );
}

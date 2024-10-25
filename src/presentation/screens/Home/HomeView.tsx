import { lazy, Suspense } from 'react';
import LoadingFallback from '../../components/shared/Loading/LoadingFallback';
import HomeProvider from '../../components/providers/Home/Home.provider';

const HomeTemplate = lazy(
  () => import('../../components/templates/Home/HomeTemplate')
);

export default function HomeView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomeProvider>
        <HomeTemplate />
      </HomeProvider>
    </Suspense>
  );
}

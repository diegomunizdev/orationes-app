import { Suspense } from 'react';
import LoadingFallback from '../../shared/Loading/LoadingFallback';
import HomeProvider from '../../providers/Home/Home.provider';
import HomeTemplate from '../../templates/Home/HomeTemplate';

export default function HomeView(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomeProvider>
        <HomeTemplate />
      </HomeProvider>
    </Suspense>
  );
}

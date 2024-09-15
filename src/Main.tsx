import 'expo-dev-client';
import './infra/lang/i18n';
import { ConfigCatProvider, PollingMode } from 'configcat-react';

import PACKAGE_JSON from '../package.json';
import LayoutProvider from './components/providers/Layout/Layout.provider';
import Routes from './components/views/Routes';

export default function Main(): JSX.Element {
  console.info(PACKAGE_JSON.name, '\x1b[32m' + `v${PACKAGE_JSON.version}`);
  const configcatKey = process.env.EXPO_PUBLIC_CONFIG_CAT_KEY;

  return (
    <ConfigCatProvider
      sdkKey={configcatKey ?? ''}
      pollingMode={PollingMode.AutoPoll}
      options={{ pollIntervalSeconds: 1 }}
    >
      <LayoutProvider>
        <Routes />
      </LayoutProvider>
    </ConfigCatProvider>
  );
}

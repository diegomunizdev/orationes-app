import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PrimaryReading from '../PrimaryReading/PrimaryReading';
import Psalms from '../Psalms/Psalms';
import SecondReading from '../SecondReading/SecondReading';
import Gospel from '../Gospel/Gospel';
import { DailyLiturgyProtocol } from '../../../../../domain/protocols/DialyLiturgy';

const Tab = createBottomTabNavigator();

export type TabContentNavigationProps = {
  dailyLiturgy: DailyLiturgyProtocol | undefined;
};

export default function TabContentNavigation({
  dailyLiturgy,
}: TabContentNavigationProps): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="primaryReading"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="primaryReading"
        options={{
          title: '1º leitura',
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="numeric-1-circle-outline"
                size={size}
                color={color}
                testID="orationes-TabContentNavigation-PrimaryReading"
              />
            );
          },
        }}
      >
        {() => (
          <PrimaryReading primaryReading={dailyLiturgy?.primeiraLeitura} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="psalm"
        options={{
          title: 'Salmos',
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons
                name="queue-music"
                size={size}
                color={color}
                testID="orationes-TabContentNavigation-Psalms"
              />
            );
          },
        }}
      >
        {() => <Psalms psalms={dailyLiturgy?.salmo} />}
      </Tab.Screen>

      {dailyLiturgy?.segundaLeitura ? (
        <Tab.Screen
          name="secondyReading"
          options={{
            title: '2º leitura',
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="numeric-1-circle-outline"
                  size={size}
                  color={color}
                  testID="orationes-TabContentNavigation-SecondReading"
                />
              );
            },
          }}
        >
          {() => <SecondReading secondReading={dailyLiturgy?.segundaLeitura} />}
        </Tab.Screen>
      ) : null}

      <Tab.Screen
        name="gospel"
        options={{
          title: 'Evangelho',
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="book-open-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      >
        {() => <Gospel gospel={dailyLiturgy?.evangelho} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

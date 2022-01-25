import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ErrorScreen } from '../Screen/Error/Error';
import { HomeScreen } from '../Screen/Home/Home';
import { LoginScreen } from '../Screen/Login/Login';
import HomeStackScreen from '../StackScreen/HomeStack';
const Tab = createBottomTabNavigator();

const TabHomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ff00e0d1',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          // activeTintColor: '#000',
          // inactiveTintColor: '#aaa',
          height: 60,
          backgroundColor: '#311B92',
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
        },

        tabBarShowLabel: false,
        tabBarIcon: ({focused, color}: any) => {
          let iconName = 'ios-help';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'supervisor-account' : 'supervisor-account';
              break;

            case 'Request':
              iconName = focused ? 'request-page' : 'request-page';
              break;

            case 'Directions':
              iconName = focused ? 'directions-ferry' : 'directions-ferry';
              break;

            case 'Event':
              iconName = focused ? 'event' : 'event';
              break;
            default:
              break;
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />

      <Tab.Screen name="Request" component={ErrorScreen} />

      <Tab.Screen name="Directions" component={ErrorScreen} />

      <Tab.Screen name="Event" component={ErrorScreen} />
    </Tab.Navigator>
  );
};

export default TabHomeNavigation;

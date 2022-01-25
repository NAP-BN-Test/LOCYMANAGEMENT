import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, Dimensions, LogBox, StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import CustomSidebarMenu from './src/navigation/CustomSidebarMenu/CustomSidebarMenu';
import TabHomeNavigation from './src/navigation/TabNavigation/TabHomeNavigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();
export const ScreenHeight = Dimensions.get('window').height;
export const ScreenWidth = Dimensions.get('window').width;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  
  colors: {
    ...DefaultTheme.colors,
    primary: '#0074BC',
    
  },
};

const arrItems = [
  {
    key: '2',
    name: 'Trang chủ',
    nameTab: 'Home',
    nameStack: 'home',
    icon: (
      <MaterialIcons name={'home'} size={28} color={'#000'} />
    ),
  },
  // {
  //   key: '3',
  //   name: 'Import Shipment Status',
  //   nameTab: 'Home',
  //   nameStack: 'request',
  //   icon: (
  //     <MaterialIcons name={'supervisor-account'} size={28} color={'#000'} />
  //   ),
  // },

  {
    key: '4',
    name: 'Thiết lập',
    nameTab: 'Home',
    nameStack: 'setup',
    icon: (
      <MaterialIcons name={'settings'} size={28} color={'#000'} />
    ),
  },

  

  {
    key: '6',
    name: 'Khách hàng',
    nameTab: 'Home',
    nameStack: 'customer',
    icon: (
      <MaterialIcons name={'supervisor-account'} size={28} color={'#000'} />
    ),
  },

 


  // {
  //   key: '99',
  //   name: 'Login',
  //   nameTab: 'Home',
  //   nameStack: 'login',
  //   icon: (
  //     <MaterialIcons name={'supervisor-account'} size={28} color={'#000'} />
  //   ),
  // },
];
const App = ({navigation}: any) => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => (
            <DrawerContentScrollView {...props}>
              <CustomSidebarMenu arrItems={arrItems} {...props} />
              {/* <DrawerItem
                icon={({focused, color, size}) => (
                  <MaterialIcons
                    size={28}
                    name="login"
                    color="#0074BC"
                  />
                )}
                label="Login"
                onPress={() => {
                  // dispatch(
                  //   Action.act_signin({ username: "guest", password: "123456a$" })
                  // );
                  props.navigation.navigate('login');
                }}
              /> */}
            </DrawerContentScrollView>
          )}
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="Home" component={TabHomeNavigation} />
          {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

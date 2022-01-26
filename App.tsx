import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Dimensions, LogBox, StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import CustomSidebarMenu from './src/navigation/CustomSidebarMenu/CustomSidebarMenu';
import TabHomeNavigation from './src/navigation/TabNavigation/TabHomeNavigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './src/navigation/Screen/Login/Login';
import {AuthContext} from './src/Context/Context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();
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
    icon: <MaterialIcons name={'home'} size={28} color={'#000'} />,
  },

  {
    key: '4',
    name: 'Thiết lập',
    nameTab: 'Home',
    nameStack: 'setup',
    icon: <MaterialIcons name={'settings'} size={28} color={'#000'} />,
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

  {
    key: '7',
    name: 'Danh sách báo giá',
    nameTab: 'Home',
    nameStack: 'listquote',
    icon: <MaterialIcons name={'wysiwyg'} size={28} color={'#000'} />,
  },

  {
    key: '8',
    name: 'Danh sách order',
    nameTab: 'Home',
    nameStack: 'listorder',
    icon: <MaterialIcons name={'wysiwyg'} size={28} color={'#000'} />,
  },

  {
    key: '9',
    name: 'Đề nghị',
    nameTab: 'Home',
    nameStack: 'suggestions',
    icon: <MaterialIcons name={'art-track'} size={28} color={'#000'} />,
  },

  {
    key: '10',
    name: 'Phiếu chi',
    nameTab: 'Home',
    nameStack: 'payment',
    icon: <MaterialIcons name={'payment'} size={28} color={'#000'} />,
  },

  {
    key: '11',
    name: 'Luồng tiền',
    nameTab: 'Home',
    nameStack: 'cashflow',
    icon: <MaterialIcons name={'local-atm'} size={28} color={'#000'} />,
  },

  {
    key: '12',
    name: 'KQKD Ngày',
    nameTab: 'Home',
    nameStack: 'kqkddate',
    icon: <MaterialIcons name={'add-task'} size={28} color={'#000'} />,
  },

  {
    key: '13',
    name: 'KQKD Tháng',
    nameTab: 'Home',
    nameStack: 'kqkdmonth',
    icon: <MaterialIcons name={'add-task'} size={28} color={'#000'} />,
  },

  {
    key: '14',
    name: 'Công nợ',
    nameTab: 'Home',
    nameStack: 'debts',
    icon: <MaterialIcons name={'hvac'} size={28} color={'#000'} />,
  },
];
const App = ({navigation}: any) => {
  const [islogin, setIslogin] = useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIslogin(true);
      },
      signOut: () => {
        setIslogin(false);
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          {!islogin ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Login" component={LoginScreen} />
              {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
            </Stack.Navigator>
          ) : (
            <Drawer.Navigator
              drawerContent={props => (
                <DrawerContentScrollView {...props}>
                  <CustomSidebarMenu arrItems={arrItems} {...props} />
                  <DrawerItem
                    icon={({focused, color, size}) => (
                      <MaterialCommunityIcons
                        size={28}
                        name="logout"
                        color="#0074BC"
                      />
                    )}
                    label="Logout"
                    onPress={() => setIslogin(false)}
                  />
                </DrawerContentScrollView>
              )}
              screenOptions={{
                headerShown: false,
              }}>
              <Drawer.Screen name="Home" component={TabHomeNavigation} />
            </Drawer.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
};

export default App;

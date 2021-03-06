import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import CustomSidebarMenu from './CustomSidebarMenu/CustomSidebarMenu';
import TabHomeNavigation from './TabNavigation/TabHomeNavigation';
const arrItems = [
  {
    key: '2',
    name: 'Trang chủ',
    nameTab: 'Home',
    nameStack: 'home',
    icon: <MaterialIcons name={'home'} size={28} color={'#000'} />,
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
const Navigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
          drawerContent={props => (
            <DrawerContentScrollView {...props}>
              <CustomSidebarMenu arrItems={arrItems} {...props} />
            </DrawerContentScrollView>
          )}
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="Home" component={TabHomeNavigation} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

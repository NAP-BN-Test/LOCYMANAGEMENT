import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Button, View } from 'react-native';
function HomeScreen({navigation}: any) {
    return (
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({navigation}: any) {
    return (
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
const Navigation = () => {
    const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

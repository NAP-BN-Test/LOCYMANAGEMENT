import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text, SafeAreaView} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const CustomSidebarMenu = ({arrItems, navigation, ...props}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View style={styles.sideMenuProfileIcon}>
        <Image
          style={{width: 260, height: '100%'}}
          source={require('../../Common/img/logo.jpg')}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          paddingTop: 30,
          borderColor: 'gray',
        }}></View>
      <DrawerContentScrollView {...props}>
        {arrItems.map((route: any) => (
          <DrawerItem
            key={route.key}
            label={route.name}
            onPress={() => {
              console.log(route);

              // navigation.navigate(route.nameTab, {
              //   name: route.nameStack,
              //   params: {isReload: true},
              // });
              navigation.navigate(route.nameStack);
            }}
            icon={() => route.icon}
          />
        ))}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    // flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 30,
    height: 100,
    // justifyContent: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;

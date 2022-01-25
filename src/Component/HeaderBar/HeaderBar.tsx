import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Linking,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderBar = ({navigation, title}: any) => {
  const openDial = (phone: string) => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };

  console.log('navigation', navigation);

  return (
    <View
      style={{
        flexDirection: 'row',
        // width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#311B92',
        zIndex: 9999,
      }}>
      <View
        style={{
          flexDirection: 'row',
          // width: '100%',
          justifyContent: 'space-between',
        }}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons size={26} color="white" name="menu" />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
            }}>
            {title}
          </Text>
        </View>
      </View>

      <View style={styles.headerRight}>
        <MaterialIcons size={26} color="white" name="notifications" onPress={()=>navigation.navigate('Home', {screen: 'noti'})}/>
        <MaterialIcons size={26} color="white" name="search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 80,
  },
  headerLeft: {
    paddingLeft: 20,
    paddingRight: 10,
  },
});

export default HeaderBar;

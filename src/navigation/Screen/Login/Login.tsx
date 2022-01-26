import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../Context/Context';
export function LoginScreen({navigation}: any) {
  const {signIn} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../Common/img/backgroundlogin.jpg')}
        style={styles.bgImage}
        resizeMode="cover">
        <View style={styles.top}>
          <MaterialIcons name={'settings'} size={80} color={'#fff'} />
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 28}}>
            LOGISTICS
          </Text>
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 28}}>
            MANAGEMENT
          </Text>
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 28}}>
            SYSTEM
          </Text>
        </View>
        <View style={styles.section}>
          <View style={{paddingTop: 30, paddingHorizontal: 50}}>
            <View
              style={{
                height: 40,
                justifyContent: 'center',
                marginVertical: 20,
              }}>
              <TextInput
                mode="outlined"
                label="Usename"
                placeholderTextColor="#424E68"
                returnKeyType="next"
                autoCapitalize="none"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                // value={commodities}
                onChangeText={(e: any) => {}}
              />
            </View>

            <View
              style={{
                height: 40,
                justifyContent: 'center',
                marginVertical: 20,
              }}>
              <TextInput
                mode="outlined"
                label="Password"
                placeholderTextColor="#424E68"
                returnKeyType="next"
                autoCapitalize="none"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                // value={commodities}
                onChangeText={(e: any) => {}}
              />
            </View>

            <View
              style={{
                height: 40,
                justifyContent: 'center',
                marginVertical: 20,
              }}>
              <Button
                // icon="camera"
                style={{backgroundColor: '#311B92'}}
                mode="contained"
                onPress={() => signIn()}>
                LOGIN
              </Button>
            </View>

            <View
              style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
              <Text style={{color: '#fff'}}>VSL & NAM AN PHU</Text>
              <Text style={{color: '#fff'}}>www.namanphu.vn</Text>
            </View>
            <View
              style={{display: 'flex', alignItems: 'flex-end', marginTop: 20}}>
              <MaterialIcons name={'settings'} size={24} color={'#311B92'} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // position: 'relative'
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    // marginHorizontal: -20,
  },
  section: {
    flex: 1,
    bottom: '5%',
    position: 'absolute',
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  top: {
    flex: 1,
    top: '10%',
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 50,
  },

  title: {
    // marginTop: 30,
    marginHorizontal: 20,
    fontSize: 24,
    color: '#fff',
  },
});

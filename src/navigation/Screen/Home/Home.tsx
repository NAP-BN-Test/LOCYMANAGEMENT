import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export function HomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../Common/img/logo.jpg')}
        style={styles.bgImage}
        resizeMode="cover">
        {/* <View style={styles.section}>
          <Text style={styles.title}>Chức năng đang phát triển</Text>
          <Text style={styles.title}>vui lòng quay lại sau</Text>
        </View> */}
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
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '113%',
    // marginHorizontal: -20,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // marginTop: 30,
    marginHorizontal: 20,
    fontSize: 24,
    color: '#fff',
  },
});

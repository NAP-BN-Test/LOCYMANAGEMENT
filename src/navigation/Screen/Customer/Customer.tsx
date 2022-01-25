import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Surface} from 'react-native-paper';

function Customer({navigation}: any) {
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 20}}>
      <Surface style={styles.surface}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', {screen: 'detailcustomer'});
          }}>
          <View
            style={{
              width: '100%',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
              TÊN NGƯỜI ĐẠI DIỆN
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              Short Name
            </Text>
          </View>
          <View
            style={{
              width: '100%',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>
              Phone / Email / Chat
            </Text>
          </View>
        </TouchableOpacity>
      </Surface>

      <Surface style={styles.surface}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', {screen: 'detailcustomer'});
          }}>
          <View
            style={{
              width: '100%',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
              TÊN NGƯỜI ĐẠI DIỆN
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              Short Name
            </Text>
          </View>
          <View
            style={{
              width: '100%',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>
              Phone / Email / Chat
            </Text>
          </View>
        </TouchableOpacity>
      </Surface>
      <Surface style={styles.surface}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', {screen: 'detailcustomer'});
          }}>
          <View
            style={{
              width: '100%',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
              TÊN NGƯỜI ĐẠI DIỆN
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              Short Name
            </Text>
          </View>
          <View
            style={{
              width: '100%',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>
              Phone / Email / Chat
            </Text>
          </View>
        </TouchableOpacity>
      </Surface>
    </View>
  );
}

export default Customer;
const styles = StyleSheet.create({
  surface: {
    padding: 10,
    // height: 80,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    elevation: 4,
    marginTop: 10,
  },
});

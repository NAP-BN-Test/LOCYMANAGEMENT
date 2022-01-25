import React from 'react';
import {Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
function Setup() {
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 50}}>
      <View
        style={{
          height: 40,
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <TextInput
          mode="outlined"
          label="db.namanphu.cn"
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
          label="namanphu"
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
          onPress={() => console.log('Pressed')}>
          Thiết lập
        </Button>
      </View>
    </View>
  );
}

export default Setup;

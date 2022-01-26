import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, Button, RadioButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
function Order({navigation}: any) {
  const [checked, setChecked] = React.useState('SEA');
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 30}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: '#c356b5', fontWeight: '600'}}>
              Số Order
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RadioButton
                value="SEA"
                status={checked === 'SEA' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('SEA')}
                color="#c356b5"
              />
              <Text>SEA</Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RadioButton
                value="AIR"
                status={checked === 'AIR' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('AIR')}
                color="#c356b5"
              />
              <Text>AIR</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 40,
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <TextInput
            mode="outlined"
            label="Khách hàng"
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
            label="POL"
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
            label="POD"
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
            label="Hàng hóa"
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
            label="ETD"
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
            height: 60,
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <TextInput
            mode="outlined"
            label="Ghi chú"
            placeholderTextColor="#424E68"
            returnKeyType="next"
            autoCapitalize="none"
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
            style={{height: 80}}
            // value={commodities}
            onChangeText={(e: any) => {}}
          />
        </View>

        <View
          style={{
            height: 40,
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Button
            // icon="camera"
            style={{backgroundColor: '#311B92'}}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            GỦI
          </Button>
        </View>

        
      </ScrollView>
    </View>
  );
}

export default Order;

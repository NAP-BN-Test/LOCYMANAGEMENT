import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, Button, RadioButton} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
function Quote() {
  const [checked, setChecked] = React.useState('SEA');
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 30}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Text style={{fontSize: 18, color: '#c356b5', fontWeight: '600'}}>Số Báo Giá</Text>
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
                onPress={() => setChecked('first')}
                color='#c356b5'
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
                onPress={() => setChecked('second')}
                color='#c356b5'
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
            label="P.I.C"
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
            label="Giá"
            placeholderTextColor="#424E68"
            returnKeyType="next"
            autoCapitalize="none"
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
            // value={commodities}
            onChangeText={(e: any) => {}}
            right={<TextInput.Icon
                style={{ marginRight: 20 }}
                name={() => (
                  <Ionicons name="search" size={26} color="#c356b5" />
                )}
                
              />}
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
            label="Ghi chú"
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
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Button
            // icon="camera"
            style={{backgroundColor: '#311B92'}}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            LƯU
          </Button>
        </View>

        <View
          style={{
            height: 40,
            justifyContent: 'center',
            marginBottom: 10
          }}>
          <Button
            // icon="camera"
            style={{backgroundColor: '#c356b5'}}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            EMAIL
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

export default Quote;

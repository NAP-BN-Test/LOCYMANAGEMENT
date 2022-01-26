import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, Button, RadioButton, Surface} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
function PriceLookUp() {
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
              {/* Số Báo Giá */}
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
            label="CARRIER"
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
            TÌM
          </Button>
        </View>

        <Surface style={styles.surface}>
          <TouchableOpacity
            onPress={() => {
              //   navigation.navigate('Home', {screen: 'detailcustomer'});
            }}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                // marginBottom: 5
                // justifyContent: 'space-around'
              }}>
              <Text style={{fontWeight: '400', fontSize: 14, color: '#311B92'}}>
                OOCL
              </Text>
              <Text style={{fontWeight: '400', fontSize: 10, color: '#c356b5', top: -1, marginLeft: 10}}>
                USD
              </Text>
            </View>

            <View
              style={{
                width: '100%',
              }}>
              <Text style={{fontWeight: '400', fontSize: 14, lineHeight: 20}}>
                CONT 20 : 5.000 / CONT 40: 7.000 / CBM: 200 / WGT(TON): 200 /
                C.WGT(KG): 290
              </Text>
            </View>
          </TouchableOpacity>
        </Surface>

        <Surface style={styles.surface}>
          <TouchableOpacity
            onPress={() => {
              //   navigation.navigate('Home', {screen: 'detailcustomer'});
            }}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                // marginBottom: 5
                // justifyContent: 'space-around'
              }}>
              <Text style={{fontWeight: '400', fontSize: 14, color: '#311B92'}}>
                CK LINE
              </Text>
              <Text style={{fontWeight: '400', fontSize: 10, color: '#c356b5', top: -1, marginLeft: 10}}>
                USD
              </Text>
            </View>

            <View
              style={{
                width: '100%',
              }}>
              <Text style={{fontWeight: '400', fontSize: 14, lineHeight: 20}}>
                CONT 20 : 5.000 / CONT 40: 7.000 / CBM: 200 / WGT(TON): 200 /
                C.WGT(KG): 290
              </Text>
            </View>
          </TouchableOpacity>
        </Surface>

        <Surface style={styles.surface}>
          <TouchableOpacity
            onPress={() => {
              //   navigation.navigate('Home', {screen: 'detailcustomer'});
            }}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                // marginBottom: 5
                // justifyContent: 'space-around'
              }}>
              <Text style={{fontWeight: '400', fontSize: 14, color: '#311B92'}}>
                MAERSK
              </Text>
              <Text style={{fontWeight: '400', fontSize: 10, color: '#c356b5', top: -1, marginLeft: 10}}>
                USD
              </Text>
            </View>

            <View
              style={{
                width: '100%',
              }}>
              <Text style={{fontWeight: '400', fontSize: 14, lineHeight: 20}}>
                CONT 20 : 5.000 / CONT 40: 7.000 / CBM: 200 / WGT(TON): 200 /
                C.WGT(KG): 290
              </Text>
            </View>
          </TouchableOpacity>
        </Surface>
      </ScrollView>
    </View>
  );
}

export default PriceLookUp;
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

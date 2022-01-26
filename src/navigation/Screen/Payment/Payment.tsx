import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Surface} from 'react-native-paper';
function Payment({navigation}: any) {
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 20, height: '100%'}}>
      
      <Surface style={styles.surface}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10,
                color: '#000',
                opacity: 0.8,
              }}>
              LÊ ĐOÀN VĨNH NAM
            </Text>
            <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
              25/01/2022
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              5.000.000
            </Text>
            <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>VND</Text>
          </View>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>Số phiếu</Text>
            <Text
              style={{
                fontSize: 10,
                color: '#fff',
                backgroundColor: '#18dbc9',
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 15,
                fontWeight: '600',
              }}>
              TM
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>Lý do chi</Text>
            
          </View>
        </TouchableOpacity>
      </Surface>

      <Surface style={styles.surface}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10,
                color: '#000',
                opacity: 0.8,
              }}>
              LÊ ĐOÀN VĨNH NAM
            </Text>
            <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
              25/01/2022
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              5.000.000
            </Text>
            <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>VND</Text>
          </View>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>Số phiếu</Text>
            <Text
              style={{
                fontSize: 10,
                color: '#fff',
                backgroundColor: '#18dbc9',
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 15,
                fontWeight: '600',
              }}>
              TM
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>Phiếu chi trả tiền nhà cung cấp</Text>
            
          </View>
        </TouchableOpacity>
      </Surface>

      <Surface style={styles.surface}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10,
                color: '#000',
                opacity: 0.8,
              }}>
              LÊ ĐOÀN VĨNH NAM
            </Text>
            <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
              25/01/2022
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              5.000.000
            </Text>
            <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>VND</Text>
          </View>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>Số phiếu</Text>
            <Text
              style={{
                fontSize: 10,
                color: '#fff',
                backgroundColor: '#ff00e0d1',
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 15,
                fontWeight: '600',
              }}>
              CK
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '400', fontSize: 14}}>Trả tiền nhà cung cấp bằng sec chuyển khoản</Text>
            
          </View>
        </TouchableOpacity>
      </Surface>

    </View>
  );
}

export default Payment;
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

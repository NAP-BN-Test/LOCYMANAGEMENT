import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Portal, Surface, FAB} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScreenHeight} from '../../../../../App';
import BtnPlus from '../../../../Component/BtnPlus/btnplus';
import MyFAB from '../../../../Component/BtnPlus/FAB/myFab';
function ListQuote({navigation}: any) {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}: any) => setState({open});

  const {open} = state;
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 20, height: '100%'}}>
      <Surface style={styles.surface}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10,
                color: '#000',
                opacity: 0.8,
              }}>
              SỐ BÁO GIÁ
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
              paddingHorizontal: 20,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              TÊN NGẮN KHÁCH HÀNG
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10,
                color: '#000',
                opacity: 0.8,
              }}>
              TÊN NGƯỜI NHẬN
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingTop: 20,
              // paddingVertical: 40,
              marginHorizontal: 10,
              borderColor: 'gray',
              opacity: 0.5,
              marginBottom: 10,
            }}></View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <View style={{width: '15%'}}>
              <Text style={{fontWeight: '400', fontSize: 14, color: 'blue'}}>
                SEA
              </Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>VNHPH - SHANGHAI</Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <View style={{width: '15%'}}>
              <Text style={{fontWeight: '400', fontSize: 14, color: 'blue'}}>
                USD
              </Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>
                CONT 20 : 5.000 / CONT 40: 7.000 / CBM: 200 / WGT(TON): 200 /
                C.WGT(KG): 290
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>

      <Surface style={styles.surface}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10,
                color: '#000',
                opacity: 0.8,
              }}>
              SỐ BÁO GIÁ
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
              paddingHorizontal: 20,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              TÊN NGẮN KHÁCH HÀNG
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10,
                color: '#000',
                opacity: 0.8,
              }}>
              TÊN NGƯỜI NHẬN
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingTop: 20,
              // paddingVertical: 40,
              marginHorizontal: 10,
              borderColor: 'gray',
              opacity: 0.5,
              marginBottom: 10,
            }}></View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <View style={{width: '15%'}}>
              <Text style={{fontWeight: '400', fontSize: 14, color: 'blue'}}>
                SEA
              </Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>VNHPH - SHANGHAI</Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <View style={{width: '15%'}}>
              <Text style={{fontWeight: '400', fontSize: 14, color: 'blue'}}>
                USD
              </Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>
                CONT 20 : 5.000 / CONT 40: 7.000 / CBM: 200 / WGT(TON): 200 /
                C.WGT(KG): 290
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
      {/* <BtnPlus
        icon="plus"
        actions={[]}
        // backgroundColor='#ff00e0'
        onPress={() => {
          navigation.navigate('Home', {screen: 'quote'});
        }}
      /> */}

      <MyFAB
        onPress={() => {
          navigation.navigate('Home', {screen: 'quote'});
        }}
      />
    </View>
  );
}

export default ListQuote;
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

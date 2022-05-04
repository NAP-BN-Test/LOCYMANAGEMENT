import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Surface, TextInput} from 'react-native-paper';
import RNSRadioGroup from '../../../Component/radiogroup/radiogroupCpn';
function Debts({navigation}: any) {
  const [state, setState] = React.useState({open: false});
  const [indexSelect, setIndexSelect] = useState(0);
  const onStateChange = ({open}: any) => setState({open});

  const {open} = state;
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 10, height: '100%'}}>
      <View style={{height: 50}}>
        <RNSRadioGroup
          underline
          //   style={styles.demoItem}
          items={['NỢ', 'CÓ']}
          selectedIndex={indexSelect}
          onChange={(index: any) => setIndexSelect(index)}
        />
      </View>
      <View style={{backgroundColor: indexSelect != 1? 'green': '#ff6d00', paddingVertical: 10, paddingHorizontal: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginBottom: 10,
          }}>
          <View style={{}}>
            <Text style={{fontWeight: '600',color: '#fff', fontSize: 14}}>VND</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '600',color: '#fff', fontSize: 14}}>35.000.000</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginBottom: 10,
          }}>
          <View style={{}}>
            <Text style={{fontWeight: '600',color: '#fff', fontSize: 14}}>USD</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '600',color: '#fff', fontSize: 14}}>5.000</Text>
          </View>
        </View>
      </View>

      <Surface style={styles.surface}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginBottom: 10,
            }}>
            <View style={{}}>
              <Text style={{fontWeight: '600', fontSize: 14, color: '#ff00e0'}}>
                ANT VINA
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginBottom: 10,
            }}>
            <View style={{}}>
              <Text style={{fontWeight: '400', fontSize: 14}}>VND</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>35.000.000</Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              //   marginBottom: 10,
            }}>
            <View style={{}}>
              <Text style={{fontWeight: '400', fontSize: 14}}>USD</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>5.000</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingTop: 10,
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
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginBottom: 10,
            }}>
            <View style={{}}>
              <Text style={{fontWeight: '600', fontSize: 14, color: '#ff00e0'}}>
                VINATABA
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginBottom: 10,
            }}>
            <View style={{}}>
              <Text style={{fontWeight: '400', fontSize: 14}}>VND</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>35.000.000</Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginBottom: 10,
            }}>
            <View style={{}}>
              <Text style={{fontWeight: '400', fontSize: 14}}>USD</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>5.000</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    </View>
  );
}

export default Debts;
const styles = StyleSheet.create({
  surface: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    // height: 80,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    elevation: 4,
    marginTop: 10,
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Portal, Surface, FAB} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
function CashFlow({navigation}: any) {
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
              marginVertical: 3,
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '600', fontSize: 16, color: '#ff00e0'}}>
              MÃ TK
            </Text>
            <Text style={{fontWeight: '600', fontSize: 16, color: '#ff00e0'}}>
              SỐ TIỀN
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingTop: 5,
              // paddingVertical: 40,
              marginHorizontal: 10,
              borderColor: 'gray',
              opacity: 0.5,
              marginBottom: 10,
            }}></View>

          <View
            style={{
              paddingHorizontal: 10,
              marginBottom: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: '400', fontSize: 14, color: 'blue'}}>
                111
              </Text>
            </View>
            <View style={{}}>
              <Text style={{color: '#32aa63', fontWeight: '600'}}>
                5.500.000.000
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              marginBottom: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: '400', fontSize: 14}}>1111</Text>
            </View>
            <View style={{}}>
              <Text style={{}}>5.000.000.000</Text>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              marginBottom: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: '400', fontSize: 14}}>1112</Text>
            </View>
            <View style={{}}>
              <Text style={{}}>500.000.000</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingTop: 5,
              paddingBottom: 5,
              // paddingVertical: 40,
              marginHorizontal: 10,
              borderColor: 'gray',
              opacity: 0.5,
              marginBottom: 10,
            }}></View>

          <View
            style={{
              paddingHorizontal: 10,
              marginBottom: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: '400', fontSize: 14, color: 'blue'}}>
                112
              </Text>
            </View>
            <View style={{}}>
              <Text style={{color: '#32aa63', fontWeight: '600'}}>
                20.000
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              marginBottom: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: '400', fontSize: 14}}>1121</Text>
            </View>
            <View style={{}}>
              <Text style={{}}>15.000</Text>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              marginBottom: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: '400', fontSize: 14}}>1122</Text>
            </View>
            <View style={{}}>
              <Text style={{}}>5.000</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    </View>
  );
}

export default CashFlow;
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

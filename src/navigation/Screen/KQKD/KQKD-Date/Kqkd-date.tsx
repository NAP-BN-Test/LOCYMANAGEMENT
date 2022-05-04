import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Surface, TextInput} from 'react-native-paper';
function KQKDDATE({navigation}: any) {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}: any) => setState({open});

  const {open} = state;
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 10, height: '100%'}}>
      <View
        style={{
          height: 40,
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <TextInput
          mode="outlined"
          label="Ngày"
          placeholderTextColor="#424E68"
          returnKeyType="next"
          autoCapitalize="none"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          // value={commodities}
          onChangeText={(e: any) => {}}
        />
      </View>
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
              MÃ JOB
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
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ff00e0'}}>
              VNHPH - SHANGHAI
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 10,
              //   marginBottom: 10,
            }}>
            <View style={{width: '15%'}}>
              <Text style={{fontWeight: '400', fontSize: 14, color: '#00aaeb'}}>
                SEA
              </Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
              }}>
              <Text>2 x 20'DC (20 BOX) (G.W = 51 (TONS);</Text>
              <Text>Total Meas = 51 (CBM)))</Text>
            </View>
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
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginBottom: 10,
            }}>
            <View style={{}}>
              <Text style={{fontWeight: '600', fontSize: 14, color: '#274ac7'}}>
                BÁN
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>OCE | ACI | COC</Text>
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
              <Text style={{fontWeight: '600', fontSize: 14, color: '#ff6d00'}}>
                MUA
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>OCE | ACI | COC</Text>
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
              <Text style={{fontWeight: '400', fontSize: 14}}>VND</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>30.000.000</Text>
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
              <Text>4.000</Text>
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
              <Text style={{fontWeight: '600', fontSize: 14, color: '#0ac74d'}}>
                LÃI
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* <Text>OCE | ACI | COC</Text> */}
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
              <Text style={{fontWeight: '400', fontSize: 14}}>VND</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>5.000.000</Text>
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
              <Text>1.000</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <View style={{}}></View>
        <View style={{}}>
          <Text style={{color: '#000', opacity: 0.7}}>3 / 20 JOB</Text>
        </View>
      </View>
    </View>
  );
}

export default KQKDDATE;
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

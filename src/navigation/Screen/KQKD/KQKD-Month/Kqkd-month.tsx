import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Surface, TextInput} from 'react-native-paper';
function KQKDMONT({navigation}: any) {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}: any) => setState({open});

  const {open} = state;
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 10, height: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 40,
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <TextInput
            mode="outlined"
            label="Tháng"
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
            label="Dịch vụ"
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
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginBottom: 10,
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    color: '#000',
                    opacity: 0.8,
                  }}>
                  JOB
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>20</Text>
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
                <Text style={{fontWeight: '400', fontSize: 14}}>G.WT</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>35.000</Text>
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
                <Text style={{fontWeight: '400', fontSize: 14}}>C.WT</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>35.000</Text>
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
                <Text style={{fontWeight: '400', fontSize: 14}}>CBM</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>33.000</Text>
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
                <Text style={{fontWeight: '400', fontSize: 14}}>20'</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>100</Text>
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
                <Text style={{fontWeight: '400', fontSize: 14}}>40'</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>50</Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginBottom: 10,
                backgroundColor: '#274ac7',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                  width: '100%',
                }}>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#fff'}}>
                  BÁN
                </Text>
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
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginBottom: 10,
                backgroundColor: '#ff6d00',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                  width: '100%',
                }}>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#fff'}}>
                  MUA
                </Text>
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
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginBottom: 10,
                backgroundColor: '#0ac74d',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                  width: '100%',
                }}>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#fff'}}>
                  LÃI
                </Text>
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
      </ScrollView>
    </View>
  );
}

export default KQKDMONT;
const styles = StyleSheet.create({
  surface: {
    paddingVertical: 15,
    // height: 80,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    elevation: 4,
    marginTop: 10,
  },
});

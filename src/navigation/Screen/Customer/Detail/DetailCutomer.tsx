import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Modal, Portal, Surface} from 'react-native-paper';
import {ScreenWidth} from '../../../../../App';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
function DetailCustomer({navigation}: any) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 20, zIndex: 99999}}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={{marginHorizontal: 50}}
          contentContainerStyle={containerStyle}>
          <Text style={{marginBottom: 20}}>Bạn muốn làm gì?</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Button mode="text" onPress={() => {
                hideModal()
                navigation.navigate('Home', {screen: 'quote'})
                
            }}>
              Báo giá
            </Button>
            <Button mode="text" onPress={() => {
                hideModal()
                navigation.navigate('Home', {screen: 'order'})
                
            }}>
              Order
            </Button>
          </View>
        </Modal>
      </Portal>

      <Surface style={styles.surface}>
        <TouchableOpacity onPress={showModal}>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#b3257b'}}>
              Thịnh Đạt
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
              CÔNG TY TNHH MAY MẶC THỊNH ĐẠT
            </Text>
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
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <View style={{width: '15%'}}>
              <MaterialIcons name={'place'} size={21} color={'#000'} />
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>
                Số 150 Huỳnh Châu Sổ, Thị Trấn Bến Lức, Huyện Bến Lức, Tỉnh Long
                An, Việt Nam
              </Text>
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
              <MaterialIcons name={'dns'} size={21} color={'#000'} />
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>1100542431</Text>
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
              <MaterialIcons name={'person'} size={21} color={'#000'} />
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2f2268'}}>HUỲNH LỆ ĐIỀN</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>

      <Surface style={styles.surface}>
        <TouchableOpacity onPress={showModal}>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#b3257b'}}>
              HUỲNH LỆ ĐIỀN
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
              GIÁM ĐỐC
            </Text>
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
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <View style={{width: '15%'}}>
            <Text>Phone</Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2f2268'}}>
                0913 222 333
              </Text>
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
            <Text>Email</Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2f2268'}}>name@gmail.com</Text>
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
            <Text>Chat</Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2f2268'}}>hovaten</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>

      <Surface style={styles.surface}>
        <TouchableOpacity onPress={showModal}>
          <View
            style={{
              width: '100%',
              marginVertical: 3,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#b3257b'}}>
              LƯƠNG QUỐC KHÁNH
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
              KINH DOANH
            </Text>
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
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <View style={{width: '15%'}}>
            <Text>Phone</Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2f2268'}}>
                0913 222 333
              </Text>
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
            <Text>Email</Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2f2268'}}>name@gmail.com</Text>
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
            <Text>Chat</Text>
            </View>
            <View
              style={{
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2f2268'}}>hovaten</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    </View>
  );
}

export default DetailCustomer;
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

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Surface} from 'react-native-paper';
import {ScreenWidth} from '../../../../App';

function Noti() {
  return (
    <View style={{paddingTop: 30, paddingHorizontal: 20}}>
      <Surface style={styles.surface}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
            Subtitle 1
          </Text>
          <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
            14/01/2022 03:14 PM
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontSize: 13, marginTop: 5}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </Text>
        </View>
      </Surface>

      <Surface style={styles.surface}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
            Subtitle 1
          </Text>
          <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
            14/01/2022 03:14 PM
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontSize: 13, marginTop: 5}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </Text>
        </View>
      </Surface>
      <Surface style={styles.surface}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
            Subtitle 1
          </Text>
          <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
            14/01/2022 03:14 PM
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontSize: 13, marginTop: 5}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </Text>
        </View>
      </Surface>

      <Surface
        style={[styles.surface, {backgroundColor: '#80808078', elevation: 0}]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
            Subtitle 1
          </Text>
          <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
            14/01/2022 03:14 PM
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontSize: 13, marginTop: 5}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </Text>
        </View>
      </Surface>

      <Surface
        style={[styles.surface, {backgroundColor: '#80808078', elevation: 0}]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
            Subtitle 1
          </Text>
          <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
            14/01/2022 03:14 PM
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontSize: 13, marginTop: 5}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </Text>
        </View>
      </Surface>

      <Surface
        style={[styles.surface, {backgroundColor: '#80808078', elevation: 0}]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14, color: '#000'}}>
            Subtitle 1
          </Text>
          <Text style={{fontSize: 10, color: '#000', opacity: 0.5}}>
            14/01/2022 03:14 PM
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontSize: 13, marginTop: 5}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </Text>
        </View>
      </Surface>

    </View>
  );
}

export default Noti;
const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',

    elevation: 1,
    marginTop: 10,
  },
});

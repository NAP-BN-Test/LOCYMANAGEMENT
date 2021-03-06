import * as React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

const MyFAB = (props: any) => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={props.onPress}
  />
);

export default MyFAB;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#c91884',
    fontSize: 32
  },
});

import { Button, Text, View } from "react-native";
import React from 'react';
export function LoginScreen({navigation}: any) {
    return (
      <View
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Login screen</Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
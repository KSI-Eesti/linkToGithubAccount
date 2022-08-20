import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  const [name, setName] = useState('CR7')

  const onClick = ()=> {  
    Linking.openURL('https://github.com/KSI-Eesti')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <Button title='Let us Start' color='#111001' onPress={onClick}></Button>
      <StatusBar barStyle= 'light-content' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#e11',
    margin: 20
  }
});

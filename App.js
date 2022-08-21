import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0);

  const onClick = ()=> { 
    setCount(count + 1);
    setClick(click * 5);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title='ADB' onPress={onClick}></Button>
      <Text style={styles.text}>You clicked {count * 5} times</Text>
      <StatusBar barStyle= 'dark-content' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    margin: 20
  }
});

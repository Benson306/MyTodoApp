import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Ben');

  const clickHandler = () =>{
    setName("Bonson");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello {name}</Text>
      </View>
      <View style={styles.body}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>

      <View style={styles.button}>
        <Button title='Update State' onPress={clickHandler} />
      </View>

      <StatusBar style="auto" />
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
  header:{
    backgroundColor: 'purple',
    padding: 20,
    borderRadius:5,
    marginBottom:5
  },
  headerText: {
    color:'white'
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20
  },
  button:{
    marginTop:5,
    borderRadius:5
  }
});

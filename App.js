import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Ben');
  const [age, setAge] = useState('30');

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

      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter Name e.g Ben Ndiwa"
        onChangeText={(val) => setName(val)}
        />

      <Text>Enter Age:</Text>
      <TextInput 
        multiline
        keyboardType='numeric'
        style={styles.input} 
        placeholder="Enter Age"
        onChangeText={(val) => setAge(val)}
        />


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
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    padding:8,
    margin:10,
    width: 300,
    borderRadius:5
  }
});

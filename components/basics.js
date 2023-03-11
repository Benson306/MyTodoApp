import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';

export default function Basics() {
  const [name, setName] = useState('Ben');
  const [age, setAge] = useState('30');

  const clickHandler = () =>{
    setName("Bonson");
  }

  const [people, setPeople] =  useState([
    {name:'Ben', id: '1'},
    {name:'Abu', id: '2'},
    {name:'Eliud', id: '3'},
    {name:'Mercy', id: '4'},
    {name:'Faith', id: '5'},
    {name:'Grace', id: '6'},
    {name:'Mum', id: '7'},
    {name:'Dad', id: '8'}
  ]);

  const pressHandler = (id) =>{
      setPeople((prevPeople)=>{
        return prevPeople.filter(person => person.id != id)
      } )
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
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
      <ScrollView>
      {
        people.map(person=>(
          <View key={person.key}>
            <Text style={styles.persons}>{person.name}</Text>
          </View>
        ))
      }
      </ScrollView>
      
      <FlatList
        numColumns={2}
        keyExtractor={(item)=> item.id}
        data={people}
        renderItem={({ item })=>(
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.persons}>{item.name}</Text>
          </TouchableOpacity>
          
        )}
      />

      */}
      


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
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
  },
  persons:{
    marginTop: 24,
    padding: 30,
    backgroundColor:'purple',
    color:'white',
    marginHorizontal:10,
    width:150
  }
});

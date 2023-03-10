import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello Ben</Text>
      </View>
      <View style={styles.body}>
        <Text>Open up App.js to start working on your app!</Text>
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
  }
});

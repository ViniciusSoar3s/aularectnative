import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu primeiro aplicativo 1</Text>
      <Image source={require('./assets/bomba.jpg')} style={styles.logo}/>
      <Text style={styles.text2}>Meu primeiro aplicativo 2</Text>
      <Image source={require('./assets/explosão.jpg')} style={styles.logo2}/>
      <TextInput style={styles.input} placeholder='Digite seu nome'/>
      <Button title='Salvar'/>
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
  text: {
    frontsize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
  logo: {
    width: 50,
    height: 100,
    marginBotton: 10,
    opacity: 1,
  },
  text2: {
    frontsize: 10,
    fontWeight: 'bold',
    color: 'purple',
  },
  logo2: {
    width: 50,
    height: 50,
    marginBotton: 10,
    opacity: 1,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBotton:20,
  }
});

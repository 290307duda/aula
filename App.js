import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
  Text
} from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>MARIA EDUARDA SANTOS LUZ</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvDlYKv59tgMjWoe5wCHxiK0jP9Bv2mn_kpv4Q6rFsry61RJawSoa0wE8ayNiR__36SE&usqp=CAU',
        }}
      />
      <TextInput style={styles.input} placeholder="Nome" keyboardType="text" />
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        keyboardType="numeric"
      />

      <Image style={styles.img2} source={require('img.png')} />

      <Text>
      </Text>
 
      <Button
        title="INFO"
        onPress={() => Alert.alert('Maria Eduarda Santos Luz')}
        color="#d63384"
         padding = "10"
      />

        
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 1,
  },

  input: {
    height: 50,
    margin: 17,
    borderWidth: 3,
    padding: 10,
  },

  img: {
    width: 400,
    height: 200,
  },

  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 55,
 
  },

  img2: {
    width: 400,
    height: 70,
  },
});

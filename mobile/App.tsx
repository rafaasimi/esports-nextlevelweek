import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text>Aplicação rodando no meu celular.</Text>
      <Text>📱🎮</Text>
      <Button title="BORA CODAR!"/>
      <StatusBar style="auto"/>
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

  title: {
    fontSize: 24
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8,
    marginTop: 16
  },
  text: {
    color: 'white'
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/header.js';

const cidades = [
  {nome: "Joinville", estado: "SC"},
  {nome: "Araquari", estado: "SC"},
  {nome: "São Paulo", estado: "SP"},
  {nome: "Bento Gonçalves", estado: "RS"},
]
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList data={cidades} renderItem={({ item }) => <Text>{item.nome}, {item.estado}</Text>} />
      </View>
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
});

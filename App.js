import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InicialScreen from './screens/home';

export default function App() {
  return  <InicialScreen/> ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE170',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";




export default function HomeScreen() {
  return (
    <View style ={styles.container}>
      <View style={styles.main}>
        <Text  style={styles.title}>Welcome to Check-It!</Text>
        <Text style={styles.subtitle}>You will never forget your purchases. </Text>
        <Image 
        source={require('../assets/adaptative-icon.png')}
      />
      </View>

      
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: '#FCE170',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },



});



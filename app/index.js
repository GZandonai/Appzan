import { StyleSheet, TextStyled, View } from "react-native";
import { Link } from "expo-router";
import { TextStyled, ViewStyled } from "../utilities/nativeWind";


export default function Page() {
  return (
    <ViewStyled style={styles.container}>
      <ViewStyled style={styles.main}>
        <TextStyled style={styles.title}>Welcome to Appzan!</TextStyled>
        <TextStyled style={styles.subtitle}>You will never forget your purchases. </TextStyled>
      </ViewStyled>
    </ViewStyled>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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



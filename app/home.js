import { Alert, View, Text,Image } from "react-native";
import { styles } from "../styles/home.js";
import { Button } from "../components/buttons.js"

export default function InicialScreen() {
    const handleSave = () => {
        Alert.alert ('Salvar','Your item was saved.')

    };


    return (
        
        <View style = {styles.container}> 
        <Image 
        style = {styles.image} 
        source = {require('../assets/icon.png')}/> 


       <Button handleSave={handleSave} />

        <Text style = {styles.text}> Welcome to Appzan ! </Text>
       
        </View >
    );


}
import { Alert, View, Text,Image } from "react-native";
import { styles } from "../styles/list.js";
import { Button } from "../components/buttons.js"
import { Link } from "expo-router";

export default function InicialScreen() {
    const handleSave = () => {
        Alert.alert ('Salvar','Your item was saved.')

    };


    return (
        
        <View style = {styles.container}> 
        <Image 
        style = {styles.image} 
        source = {require('../assets/icon.png')}/> 

        <Text style = {styles.text}> Write your list here </Text>
        <Button handleSave={handleSave} />

        
       
        </View >
    );  


}
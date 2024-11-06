import { Alert, ViewStyled, TextStyled,Image } from "react-native";
import { styles } from "../styles/list.js";
import { Button } from "../components/buttons.js"
import { Link } from "expo-router";
import { TextStyled, ViewStyled } from "../utilities/nativeWind.js";

export default function InicialScreen() {
    const handleSave = () => {
        Alert.alert ('Salvar','Your item was saved.')

    };


    return (
        
        <ViewStyled style = {styles.container}> 
        <Image 
        style = {styles.image} 
        source = {require('../assets/icon.png')}/> 

        <TextStyled style = {styles.TextStyled}> Write your list here </TextStyled>
        <Button handleSave={handleSave} />

        
       
        </ViewStyled >
    );  


}
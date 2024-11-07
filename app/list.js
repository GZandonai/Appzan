import { Alert ,Image, View, Text, TextInput, TouchableOpacity, placeholder} from "react-native";
import { styles } from "../styles/list.js";
import { Button } from "../components/buttons.js"
import { Ionicons } from '@expo/vector-icons';

export default function ScreenList() {

    const handleSave = () => {
        Alert.alert ('Saved','Your item was saved')
    };





    return (
        
        <View style = {styles.container}> 
        <Image 
        style = {styles.image} 
        source = {require('../assets/icon.png')}/> 
        

        <Text style = {styles.Text}> Write your list here </Text>

    
       <View style ={styles.form}>
        <TextInput style = {styles.input}
        placeholder='write here' placeholderTextColor='#696969'    >  
        </TextInput>
        <TouchableOpacity style ={styles.button}>
        <Ionicons name= "add-circle-outline" size={24}/>
        
            
        </TouchableOpacity>

       </View>
        <Button handleSave={handleSave}/>
        
        
        </View >

        
    );  


}
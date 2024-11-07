import { Alert ,Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/list.js";
import { Button } from "../components/buttons.js"
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function ScreenList() {

    const handleSave = () => {
        Alert.alert ('Saved','Your item was saved')
    };


    //variable to save itens from input text
    const [inputValue, setInputValue]= useState ([])
    //variable to save itens in a list 
    const [itemsList, setItems] = useState ([]) 


     //function to add inputitems from input text field to a list 
     const handleAddItems = () => {
        if (inputValue.trim() !== ''){
            setItems([...itemsList, inputValue])
            Alert.alert ('Your item was saved')
            setInputValue('')
            

    } else {
        Alert.alert ('Please, you need to write something to add in your list')
    }

    }

    return (
        
        <View style = {styles.container}> 
        <Image 
        style = {styles.image} 
        source = {require('../assets/icon.png')}/> 
        

        <Text style = {styles.Text}> Write your list here </Text>

    
       <View style ={styles.form}>
        <TextInput 
        style = {styles.input}
        placeholder='write here' 
        placeholderTextColor='#696969'
        value ={inputValue}
        onChangeText={setInputValue}/>  

    
        <TouchableOpacity style ={styles.button}
        onPress={handleAddItems}>

        <Ionicons name= "add-circle-outline" size={24}/>

        </TouchableOpacity>

       </View>
        <Button handleSave={handleSave}/>
        
        
        </View >

        
    );  

}
import { Alert, Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/list.js";
import { Button } from "../components/buttons.js"
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function ScreenList() {

    const [inputValue, setInputValue] = useState('')
    const [itemList, setItemList] = useState([])

    const saveItemList = () => {
        if (inputValue.trim() !== ('')) {
            setItemList([...itemList, inputValue])
            setInputValue('')
            Alert.alert('Your item was saved')
        } else {
            Alert.alert('You need to write something to add a item')

        }
    }


    const deleteSaveItems =(itemToDelete) => {
        const updateList = itemList.filter(item => item != itemToDelete)
            setItemList(updateList)
            Alert.alert('Your item was deleted')
        
            
    }




    return (

        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/icon.png')} />
        
            <Text style={styles.Text}> Write your list here </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='write here'
                    placeholderTextColor='#696969'
                    value={inputValue}
                    onChangeText={setInputValue}
                />

                <TouchableOpacity onPress={saveItemList} style={styles.addButton}>
                    <Ionicons name="add-circle-outline" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                {/* here the list will be generated as a dinamic list  */}
                {itemList.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.infoCard}>
                            <TouchableOpacity>
                                <Ionicons
                                    style={styles.checkBox}
                                    name="checkbox-outline"
                                    size={24}
                                />
                            </TouchableOpacity>

                            <Text style={styles.textItem}>{item}</Text>
                        </View>

                        <TouchableOpacity  onPress={() => deleteSaveItems(item)}>
                            <Ionicons style={styles.trashButton} name="trash-outline" size={24}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>


    );

}
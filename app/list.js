import { Alert, Image, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../styles/list.js";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function ScreenList() {
    const [inputValue, setInputValue] = useState('');
    const [itemList, setItemList] = useState([]);

    // function to add items in a list when the user touch the add button
    const saveItemList = () => {
        if (inputValue.trim() !== '') {
            setItemList([...itemList, { text: inputValue, isChecked: false }]);
            setInputValue('');
            Alert.alert('Your item was saved');
        } else {
            Alert.alert('You need to write something to add an item');
        }
    };
    
    // function to delete items in a list when the user touch the trash button
    const deleteSaveItems = (itemToDelete) => {
        const updatedList = itemList.filter(item => item.text !== itemToDelete.text);
        setItemList(updatedList);
        Alert.alert('Your item was deleted');
    };

    // function to risk  items in a list when purchased
    const riskItem = (itemToRisk) => {
        const updatedList = itemList.map(item =>
            item.text === itemToRisk.text ? { ...item, isChecked: !item.isChecked } : item
        );
        setItemList(updatedList);
    };

    // function to render items in a list
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.infoCard}>
                <TouchableOpacity onPress={() => riskItem(item)}>
                    <Ionicons
                        style={styles.checkBox}
                        name={item.isChecked ? "checkbox" : "checkbox-outline"}
                        size={24}
                    />
                </TouchableOpacity>
                <Text style={[styles.textItem, item.isChecked && styles.textItemChecked]}>
                    {item.text}
                </Text>
            </View>

            <TouchableOpacity onPress={() => deleteSaveItems(item)}>
                <Ionicons style={styles.trashButton} name="trash-outline" size={24} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/icon.png')} />
        
            <Text style={styles.text}>Make your list !</Text>

            <View style={styles.form}>
                <TextInput
                    maxLength={35}
                    style={styles.input}
                    placeholder="write here"
                    placeholderTextColor="#696969"        
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <TouchableOpacity onPress={saveItemList} style={styles.addButton}>
                    <Ionicons name="add-circle-outline" size={24} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={itemList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.cardContainer}
            />
        </View>
    );
}

import { View, Text, StyleSheet } from "react-native";


export default function InicialScreen() {
    return (
        <View style = {styles.container}> 
        <Text style = {styles.text}> Welcome! </Text>
        </View >
    );


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCE170'

    },

    text: {
        color: '#FF0000',
        fontWeight: 'bold',
        fontSize: 24,

    },

})
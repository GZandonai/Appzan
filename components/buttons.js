import { Text, TouchableOpacity } from "react-native";


export const Button =(props) => {
    return (

        <TouchableOpacity
        style = {{
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 3,
            width:'60%' ,
            height:30,
            backgroundColor:'#4EFF7F',
            opacity: 0.6,
            alignItems:'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
            
        }} onPress={props.handleSave}>
             <Text>Save</Text>

        </TouchableOpacity>
   


    )


}
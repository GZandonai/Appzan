import { Text, TouchableOpacity } from "react-native";

export const Button =() => {
    return (

        <TouchableOpacity
        style = {{
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 3,
            width:'60%' ,
            height:30,
            backgroundColor:'#32CD32',
            opacity: 0.6,
            alignItems:'center',
            justifyContent: 'center'
            
        }}>
             <Text>Salvar</Text>

        </TouchableOpacity>
   


    )


}
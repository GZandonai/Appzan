import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCE170',
    

    },

    text: {
        color: '#FF5454',
        fontWeight: '',
        fontSize: 16,
        marginTop:5,

    },

    image:{
        width: 90,
        height: 90,
        borderStyle:'solid',
        borderWidth:3,
        borderColor:'#FF5454',
        borderRadius:50,
        marginBottom:5,
      
    },

    form:{
        height:54,
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
       

    },

    input: {
        height:42,
        width: '85%',
        backgroundColor:'FF5454',
        borderWidth:1,
        borderRadius: 5,
        padding:6,
        fontSize: 14,
        borderColor:'#000',

    },

    addButton: {
        height: 34,
        width: 34,
        borderRadius:5,
        backgroundColor:'#4EFF7F',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:4,
        

    },

    trashButton:{
        height: 28,
        width: 24,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        
        
    
    },

    checkBox:{

        height: 28,
        width: 24,
        alignItems:'center',
        justifyContent:'center',
       
        
    },

    card:{
        width: '90%',
        borderRadius:5,
        backgroundColor:'#ffffff',
        elevation:10,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20, 

    }, 

    infoCard:{ 
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    
    },

    textItem:{
        color:'#000000',
        fontSize:16,
    },
   
    cardContainer:{
        marginTop:5,
        gap:5,

    },

})
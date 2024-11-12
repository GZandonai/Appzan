import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function RootLayout() {
  return (
<Tabs>
    <Tabs.Screen name = 'index'
    options={{
      headerShown:false,
      headerTitle: 'Home Screen',
      title:'Home Screen',
      tabBarLabelStyle:{fontSize:16, color:'#FA8072'},
      tabBarIcon: ({color, size, focused}) => {
        if(focused){
          return <Ionicons name = 'home' color = '#FA8072' size ={28} /> 
          
    } return <Ionicons name ='home-outline' color = '#FA8072' size ={28} /> 
    
    } 
    
      }}/>

     <Tabs.Screen name = 'list'
     options={{headerTitle:'Your List', 
      title:'Your List',
      tabBarLabelStyle: {fontSize:16, color:'#FA8072'},
      tabBarIcon: ({color, size, focused}) => {
        if(focused){
          return <Ionicons name = 'bag-add' color = '#FA8072' size ={28} /> 
          
    } return <Ionicons name ='bag-add-outline' color = '#FA8072' size ={28} /> 
      }

  
     }} />

</Tabs>
  );
}
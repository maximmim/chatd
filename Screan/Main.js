import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    View,
    Text,
    TextInput,
    Button,
    Alert,
    ImageComponent,
    TouchableOpacity,
    Vibration,
    FlatList
} from 'react-native';
import Input from '../bundle/Input';
import Message from '../bundle/massage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Main() {
    
    const navigation = useNavigation()
    const [items,setitems] = useState([])
    useEffect(f,[])
    function f() {        
     setInterval(getdate,1000)
    }
    
    function getdate() { 

       
       //sendPushNotification(message) 
       
    
       

       
            axios.get('https://644ab0e4a8370fb32155be44.mockapi.io/item')
             .then(response => {
               // Handle the response data
               setitems(response.data)
                //rconsole.log(response.data)
             })
             .catch(error => {
               // Handle any errors
               Alert.alert("Eror 404","Please a reconnect to server")
               console.error(error);
               Vibration.vibrate(1000)
             })
       
       
       
       }
  return (
    
    <View style={styles.container}>

<FlatList






data={items}
renderItem={({item})=>(

<Message dext={item.msg}/>

  
)}


/>

        
        <Input/>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    massage: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        maxWidth: 80,
      },
      avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
      },
      text: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.5,
      },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

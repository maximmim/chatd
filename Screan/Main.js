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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main() {

const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Помилка збереження даних локально:', error);
    }
  };
  // отримання даних
  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
           return value;
      }
    } catch (error) {
      console.error('Помилка отримання даних локально:', error);
    }
  };
  // видалення даних
  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Помилка видалення даних локально:', error);
    }
  };
  // очищення всього локального сховища
 const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Помилка очищення локального сховища:', error);
    }
  };
  
    const navigation = useNavigation()
    const [items,setitems] = useState([])
    const [keybord,setkeydord] = useState(true)



    useEffect(f,[])
    function f() {        
     setInterval(getdate,5000);

    getData("id").then((data)=> {
        if (data == undefined) {
            const num1 = Math.floor(Math.random() * 10);
            const num2 = Math.floor(Math.random() * 10);
            const num3 = Math.floor(Math.random() * 10);
            const num4 = Math.floor(Math.random() * 10);
            const id = `${num1}${num2}${num3}${num4}`;
            saveData("id",id)
            
}
else {
    getData("id").then((data)=> {
       // alert(data)
    })
}
    })

      }
       
    function aw() {

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
               //Vibration.vibrate(1000)
             })
       
       
       
       }
  return (
    
<View style={styles.container}>
<FlatList
data={items}
renderItem={({item})=>(
<Message dext={item.msg} name_id={item.name_id}/>
)}
/>

{keybord && <Input/> }

<StatusBar style="auto" />
</View>
  );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute', // Абсолютное позиционирование
        bottom: 0, // Расположение внизу экрана
        
      },
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

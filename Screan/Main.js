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
    FlatList,
    Animated
} from 'react-native';
import Input from '../bundle/Input';
import Message from '../bundle/massage';
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import { gstyles } from '../gstyle';
import Indicator from '../bundle/indicator';




export default function Main() {

const test = false
  
const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Помилка збереження даних локально:', error);
    }
  };
  


 const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0)); 



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
  let volume = 0;
const [count, setCount] = useState(0);
  const [sound, setSound] = useState(null);
    const navigation = useNavigation()
    const [items,setitems] = useState([])
    const [keybord,setkeydord] = useState(true)
    function g() {
      console.log('New object added!');
      // Воспроизвести звуковой сигнал
    }    const url = 'https://644ab0e4a8370fb32155be44.mockapi.io/item';
    
    // Счетчик объектов на сервере
    let objectCount = 0;
    let timeup = 1500
    let timeupvol = timeup +1000
    useEffect(f,[])
    function f() {        

      getdate()      
     setInterval(getdate,timeup);
setInterval(checkServer,timeupvol)
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


    
    // URL-адрес сервера

    
    // Функция для опроса сервера

    

      }

      
    async function checkServer() {
      
      try {
        const response = await axios.get(url);
        const newObjectCount = response.data.length;
        if (newObjectCount > objectCount) {
          Playsound()
          objectCount = newObjectCount; // Обновить счетчик объектов на сервере
        }

      } catch (error) {
        console.error(error);
      }
    }

//как зделать чтоби FlatList всегда бил внизу expo

     async function s() {

      
          console.log('Loading Sound');
    const { sound } =  await Audio.Sound.createAsync(
      require('../assets/getmessage.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    
}



  async function Playsound()  {
    getData("nick").then(data  => {

    
        items.map(nickd => {
          if (nickd.nick ===  data) {
            
          }
          else {
s()

}
          })
        })

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
              if (test == true) {

              
               // Handle any errors
               Alert.alert("Eror 404","Please a reconnect to server")
               console.error(error);
               //Vibration.vibrate(1000)
              }
             })
              

       }




       
  return (
    
<View style={gstyles.container}>
<FlatList

data={items}

renderItem={({item})=>(
<Message dext={item.msg} name_id={item.name_id} nick={item.nick}/>
)}
/>
{/*<Indicator/>*/}

{keybord && <Input/> }



<StatusBar style="auto" />
</View>
  );
}


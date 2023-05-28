import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    View,
    Text,
    TextInput,
    Button,
    Alert,
    Image,
    TouchableOpacity,
    Vibration,
    FlatList,
    Animated,
    ImageComponent
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
import NetInfo from '@react-native-community/netinfo';

import { useRoute } from '@react-navigation/native';


const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Помилка збереження даних локально:', error);
    }
};
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
  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Помилка видалення даних локально:', error);
    }
};
 const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Помилка очищення локального сховища:', error);
    }
};


function Chat() {
const route = useRoute();
const id = route.params.id;
const name = route.params.name;
const sender =  route.params.sender

const [count, setCount] = useState(0);
const [sound, setSound] = useState(null);
const navigation = useNavigation()
const [items,setitems] = useState([])
const [keybord,setkeydord] = useState(true)
const [vis,setvis] = useState(true)
const [nick,setnick] = useState("")
const [setup,startsetup] = useState(false);
const [noint,ddaw] = useState(false);

useEffect(start,[])
global.test = false;
const source = axios.CancelToken.source();
const url = 'https://644ab0e4a8370fb32155be44.mockapi.io/item';
let objectCount = 0;
let timeup = 2000;
let volume = false;




function start() {        
  

 getData("nick").then((data)=>{
  setnick(data)

  if (data === undefined) {
        
      startsetup(true)
      setvis(false)




    
  }
  else {
          getdate()      
 setInterval(getdate,timeup);

  } 

})
      }

      
    async function checkServer() {
      
      try {
        const response = await axios.get(url);
        const newObjectCount = response.data.length;
        if (newObjectCount > objectCount) {
          Playsound()
          objectCount = newObjectCount; 
        }

      } catch (error) {
        console.error(error);
      }
    }


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
    //console.log(volume)
    if (volume === true) {
//console.log("1fesfese")
    

    getData("nick").then((data)  => {

    
        items.map(nickd => {
          if (nickd.nick ==  data) {
            console.log("Повідомлення було відправлино")
          }
          else {
s();
console.log("Повідомлення получено")
}
          })
        })
      
      }
    else {
      volume =  true
    }
}



async function deleteAllItems() {
  try {
    const response = await axios.get("https://644ab0e4a8370fb32155be44.mockapi.io/item");
    const itemsd = response.data;
    
    await Promise.all(itemsd.map((item) => axios.delete(`https://644ab0e4a8370fb32155be44.mockapi.io/item/${item.id}`)));

    console.log("All items deleted successfully!");
  } catch (error) {
    console.error(error);
    
  }
}  
function sendnick() {
  if( nick === undefined ){
    alert("В вас пустий нік")
  }
  else if (nick == ' ') {
    alert("Всеодно пустий")
  }
  else {

  
  saveData("nick",nick)
  //alert("Потрібне перезавантаження буль ласка перезавантажте застосунок")
  
  startsetup(false)
  setvis(true)
}
}
function repeatWithDelay() {
  
  let count = 0;
  const interval = setInterval(() => {
    
    deleteAllItems()
    count++;
    if (count === 20 || global.newObjectCount === 0) {
      clearInterval(interval);
      
    }
  }, 5000);
}
 
    function getdate() { 

NetInfo.fetch().then(state => {
  if (state.isConnected === false) {
    ddaw(true)
    console.log("Немає підключеня до інтернету")
  }
});
            axios.get(url)
             .then(response => {
             
               setitems(response.data)        
               global.newObjectCount = response.data.length;
               if (global.newObjectCount > objectCount) {
                 Playsound()
                 objectCount = global.newObjectCount; 
               }
               else if (global.newObjectCount >= 99) {


source.cancel('All requests canceled');
deleteAllItems()

               }
              
             })
             .catch(error => {
              if (test == true) {

              
              
               alert(error)
               console.error(error);
               //Vibration.vibrate(1000)
              }
             })
              

       }




  return (
    
<View style={gstyles.container}>



{vis && <View style={gstyles.container}>
<FlatList
data={items}
renderItem={({item})=>(
<Message dext={item.msg} name_id={item.name_id} nick={item.nick} sender={name}/>
)}
/>
{/*<Indicator/>*/}

{keybord && <Input/> }

</View>}

{noint &&<View style={gstyles.container}>
    <Text>В даний момент в вас нема інтернету😐</Text>
    <Image source={require('../assets/Eror.png')}/>
</View>}
{setup && <View style={gstyles.cod}>
  
  <Image style={gstyles.imae} blurRadius={5} source={require('../assets/splash.jpg')}/>

  <View><TextInput


        style={gstyles.input}
        value={nick}
        placeholder="Веди свій нік"
        onChangeText={text => setnick(text)}
      /> 
    
     
<TouchableOpacity >
  <Button onPress={sendnick} title='Enter'></Button>
</TouchableOpacity>
<Text style={gstyles.gf}>Привіт давай зарегеструємся </Text>
</View>

</View>

}
<StatusBar style="auto" />
</View>
  );
}


export default Chat
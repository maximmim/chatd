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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useRef, useState } from 'react';
import GradientButton from '../bundle/buthon';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import { addNotificationReceivedListener } from 'expo-notifications';
import { AppLoadingManager } from 'expo';
import { gstyles } from '../gstyle';

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
  




export default function Setings() {
const [y,sety] = useState("")
const [cae,setcae] =useState("")
const [csae,setcsae] =useState("")
const navigation = useNavigation()
const input = useRef()
const [nick,setnick] = useState("")
const [g,setg] = useState("")

useEffect(()=> {
    getData("id").then((data)=>{
sety(data);

});
getData("nick").then((data)=>{
  setg(data);
if (data === undefined) 
{
  alert("В вас нема ніка")
}
  });
//removeData("nick")




},[])

function da() {

}

async function deleteAllItems() {
    try {
      const response = await axios.get("https://644ab0e4a8370fb32155be44.mockapi.io/item");
      const items = response.data;
  
      await Promise.all(items.map((item) => axios.delete(`https://644ab0e4a8370fb32155be44.mockapi.io/item/${item.id}`)));
  
      console.log("All items deleted successfully!");
    } catch (error) {
      console.error(error);
      
    }
  }  
  const catar = [
    {key:'Man',value:"Man"},
    {key:'Girl',value:"Girl"},
  ]

function das() {
  saveData("gender",cae)
  navigation.navigate("home")
  alert(cae)
}
function sendnick() {
  saveData("nick",nick)
  alert("Потрібне перезавантаження буль ласка перезавантажте застосунок")
  
  

}

  return ( 
    <View style={gstyles.container}>
{

g === "Maxim" && (
  <View>
<TouchableOpacity onPress={deleteAllItems}><Text style={{position:"absolute",top:-200,left:-45,fontSize:30}}>delete</Text></TouchableOpacity>
  </View>
)}
<Text style={gstyles.bottom}>BETA 0.5v</Text>
{g === undefined && 

<View style={gstyles.cos}>





<TextInput
ref={input}

        style={gstyles.input}
        value={nick}
        placeholder="Ведіть свій нік"
        onChangeText={text => setnick(text)}
      />  
<TouchableOpacity >
  <Button onPress={sendnick} title='Enter'></Button>
</TouchableOpacity>
</View>

}
      <Text>Loading...</Text>







      {/*
      <SelectList
onSelect={das}
setSelected={setcae}
data={catar}
placeholder={'Select your gender'}

      />
*/}      
      <StatusBar style="auto" />
    </View>
  );
}


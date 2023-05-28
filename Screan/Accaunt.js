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
    ActivityIndicator
} from 'react-native';
import { gstyles } from '../gstyle';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


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



export default function Accaunt() {
const navigation = useNavigation()
const [nick,setnick] = useState('')
const [vis,setvis] = useState(false)
const [f,setf] = useState(true)


function down() {
  navigation.setOptions({
    headerShown: false ,
    tabBarStyle: [{ display: "none" }, null],
  })
}
function up() {
  navigation.setOptions({
    headerShown: true,
    tabBarStyle: [{ display: "flex" }, null],
  })
}

useEffect(()=>{
    getData("nick").then(data=>{
        setnick(data)
    })
    
},[])
function sendnick() {
    saveData('nick',nick)
    setf(false)
    setvis(true)
    down()
    setTimeout(()=>{
      setf(true)
      setvis(false)
      up()
      navigation.navigate("Home")
    },2000)
}
function dwaa() {
  global.admin = true
}
    return (
<View style={gstyles.container} >
  
{vis && <ActivityIndicator size="large" color='black' style={gstyles.dwa} />}

{f &&<View style={gstyles.container} >
<Text style={gstyles.top}>Your nick: {nick}</Text>
<Text style={gstyles.bottom} onPress={dwaa}>BETA 1.1v</Text>

<TextInput


        style={gstyles.inputd}
        value={nick}
        placeholder="Тут ти можеш змінити свій нік"
        onChangeText={text => setnick(text)}
      /> 
    
     
<TouchableOpacity >
  <Button onPress={sendnick} title='Enter'></Button>
</TouchableOpacity>
</View>}
</View>
    )
}

  
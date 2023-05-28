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
  ImageComponent,
  Keyboard
} from 'react-native';
import { useState,useEffect } from 'react';
import { gstyles } from '../gstyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
export default function Setup() {
  useEffect(()=>{
    down()
  },[])
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
  const [nick,setnick] = useState("")
  const navigation = useNavigation()
  function sendnick() {
    if( nick === undefined ){
      alert("В вас пустий нік")
    }
    else if (nick == ' ') {
      alert("Всеодно пустий")
    }
    else {

    navigation.navigate("Home")
    saveData("nick",nick)
    //alert("Потрібне перезавантаження буль ласка перезавантажте застосунок")
    

  }
  }




  return (
    <View style={gstyles.cod}>
  




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
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

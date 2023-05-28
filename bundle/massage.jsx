import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    View,
    Text,
    TextInput,
    Button,
    Alert,
    ImageComponent,
    TouchableOpacity
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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

export default function Message({dext,name_id,nick,data}) {
const navigation = useNavigation()
const [left,setleft] = useState(50)
const [id,setid] = useState('')

function getdata() {
//  alert(data)
navigation.navigate('ScreanMessage',{data:data, text:dext, nick:nick})
}
 
getData("nick").then((id)=>{
setid(id)

})   
    return (
<TouchableOpacity onPress={getdata}>
<View  style={nick === id ? styles.container : styles.containerd} >
<Text style={styles.nick}>
  {
    nick
  }
</Text>
<Text style={styles.text} >
{

dext
 
}
</Text>
</View></TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  text:{
    fontSize:15
  },
  nick:{
    fontSize:10,
    
  },
    container: {
        backgroundColor: '#00BFFF',
        borderRadius:10,
        
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        left:10,
        marginLeft:230,
        padding: 12,
        margin: 10,
        top:15
    },
    containerd: {
      backgroundColor: '#d9d9d9',
      borderRadius:10,
      
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      left:10,
      marginLeft:230,
      padding: 12,
      margin: 10,
      top:15
     },
  });
  
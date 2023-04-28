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

export default function Message({dext,name_id}) {
const [left,setleft] = useState(50)



getData("id").then((id)=>{


})   
    return (
<View style={styles.container}>
<Text >
{

dext
 
}
</Text>
</View>
    )
}
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#00BFFF',
        borderRadius:10,
        
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        left:10,
        marginLeft:230,
        padding: 16,
        margin: 10,
    },
  });
  
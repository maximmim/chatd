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
import { useEffect, useState } from 'react';
import GradientButton from '../bundle/buthon';
import axios from 'axios';
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
const [y,sety] = useState('')
useEffect(()=> {
    getData("id").then((data)=>{
sety(data)
})
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
  return ( 
    <View style={styles.container}>
{

y == 9730 && (
  <View>
<TouchableOpacity onPress={deleteAllItems}><Text style={{position:"absolute",top:-200,left:-45,fontSize:30}}>delete</Text></TouchableOpacity>
  </View>
)}

      <Text>Loading...</Text>
      
      <StatusBar style="auto" />
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

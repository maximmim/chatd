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
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { useState ,useRef, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import GradientButton from './buthon';
import axios from 'axios';
import { Platform } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

export default function Input() {
  const Tab = createBottomTabNavigator()
    const navigation = useNavigation();
    const [message, setmassage] = useState('');
    const [inputFocused, setInputFocused] = useState(false);
    const inputRef = useRef();
    
    const handleFocus = () => { 

      if (Platform.OS === 'web') {
        setInputFocused(false);
        down()
        // ваш код для приложения React Native на вебе
      } else {
        setInputFocused(true);
        // ваш код для других платформ
      }
      
    };
  
    const handleBlur = () => {
      if (Platform.OS === 'web') {
        up()
        // ваш код для приложения React Native на вебе
      } else {
        setInputFocused(false);
        // ваш код для других платформ
      }
    };
  
    const containerStyle = inputFocused ? { top: -270 } : null;
  
  
    function da() {
    
    }

    function sendmassage() {
      Keyboard.dismiss();
    
      


      
     
     getData("id").then((data)=>{

     
      //navigation.navigate('Головна')
        axios.post('https://644ab0e4a8370fb32155be44.mockapi.io/item', {
          msg: message,
          name_id:data
        
          
        })
          .then(response => {
            // Handle the response data
            console.log(response.data);
            inputRef.current.clear();
            setmassage('')

          })
          .catch(error => {
            // Handle any errors
            Alert.alert("Eror 404","Please resubmit to the server")
            console.error(error);
          }); })
    }
    function down() {
      navigation.setOptions({
        tabBarStyle: [{ display: "none" }, null],
      })
    }
    function up() {
      navigation.setOptions({
        tabBarStyle: [{ display: "flex" }, null],
      })
    }
    return (

<View style={[styles.container,containerStyle]}>



    <View style={styles.bottom}>
<TextInput
ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
        style={styles.input}
        value={message}
        placeholder="Що в тебе нового солоденький ?"
        onChangeText={text => setmassage(text)}
      />  
<GradientButton
        onPress={sendmassage}
        title="▲"
        colors={['#090979', '#00d4ff']}

/>
</View>

</View>
  );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute', // Абсолютное позиционирование
        bottom: 0, // Расположение внизу экрана
        
      },
    input: {
        height: 50,
        width:350,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        marginLeft:-50,
        
       
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
import { Audio } from 'expo-av';
import { gstyles } from '../gstyle';
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
  const [sound, setSound] = useState();
  const Tab = createBottomTabNavigator()
    const navigation = useNavigation();
    const [message, setmassage] = useState('');
    const [inputFocused, setInputFocused] = useState(false);
    const inputRef = useRef();
    const [id,setid] =useState()
    const [nick,setnick] = useState("")
useEffect(()=>{
    getData("id").then((data)=>{
setid(data)
})
getData("nick").then((data)=>{
  setnick(data)
  })
},[])


    const handleFocus = () => { 
     // playSound()
sendmassage()
      if (Platform.OS === 'web') {
        setInputFocused(false);
        down();
        
       
      } else {
        setInputFocused(true);
        
      }
      
    };
 
    const handleBlur = () => {
      //playSound()
      sendmassage()
      if (Platform.OS === 'web') {
        up();
       
      } else {
        setInputFocused(false);
        
      }
    };
  
    const containerStyle = inputFocused ? { top: -270 } : null;
          async function playSound() {
          console.log('Loading Sound');
          const { sound } = await Audio.Sound.createAsync(
            require('../assets/sendmessage.wav')
          );
          setSound(sound);
      
          console.log('Playing Sound');
          await sound.playAsync();
        }
  
    function da() {
    
    }

     function sendmassage() {
      //
      
   
      if (message == "") {

      }
      

      else {
        var dat = new Date
        var clock = dat.getHours()
        var minuts = dat.getMinutes()
        var day = dat.getDay()
       
        var data = `${clock}`+":"+`${minuts}`
      //navigation.navigate('Головна')
        axios.post(global.url, {
          msg: message,
          data:data,
          name_id:id,
          nick:nick
        
          
        })
          .then(response => {
            // Handle the response data
            console.log(response.data);

          })
          .catch(error => {
            if (global.test == true) {

           
            // Handle any errors
            alert(error)
            console.error(error);
          
          }
          }).finally((data)=>{
            Keyboard.dismiss();            
            setmassage('')
            inputRef.current.clear();
            playSound()
            
          }) 
        }}
    
    



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



    <View style={gstyles.bottom}>
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

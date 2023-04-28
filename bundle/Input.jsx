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




export default function Input() {
    const navigation = useNavigation();
    const [message, setmassage] = useState('');
    const [inputFocused, setInputFocused] = useState(false);

    const handleFocus = () => { 
      
      if (Platform.OS === 'web') {
        setInputFocused(false);
        // ваш код для приложения React Native на вебе
      } else {
        setInputFocused(true);
        // ваш код для других платформ
      }
      
    };
  
    const handleBlur = () => {
      if (Platform.OS === 'web') {
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
    
      


      
     
     
      //navigation.navigate('Головна')
        axios.post('https://644ab0e4a8370fb32155be44.mockapi.io/item', {
          msg: message,
        
          
        })
          .then(response => {
            // Handle the response data
            console.log(response.data);
          })
          .catch(error => {
            // Handle any errors
            Alert.alert("Eror 404","Please resubmit to the server")
            console.error(error);
          }); 
    }
    
  
    return (

<View style={[styles.container,containerStyle]}>



    <View style={styles.bottom}>
<TextInput
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
        left:-30
       
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

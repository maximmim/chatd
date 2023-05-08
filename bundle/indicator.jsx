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

export default function Indicator() {

  
    return (
<View style={styles.container} >
<Text style={styles.text} >Вам надійшло повідомлення </Text>
</View>
    )
}
const styles = StyleSheet.create({
  text:{
    position:"absolute",
    fontSize:16,
    left:20,
    top:4
  },
  nick:{
    fontSize:10,
    
  },
    container: {
        position:"absolute",
        backgroundColor: '#00BFFF',
        borderRadius:10,
        top:10,
        left:40,
        

        
        height:50,
        width:150
        
    },
  });
  
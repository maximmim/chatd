import Main from "./Screan/Main"

import { createStackNavigator } from '@react-navigation/stack';
import Ionic from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setings from "./Screan/Setings";

import Setup from "./Screan/Setup";
import { NavigationContainer } from '@react-navigation/native';
import { useState,useEffect, useRef} from 'react';
import Navig from "./navig";
import Accaunt from "./Screan/Accaunt";
import ScreanMessage from "./Screan/Screanmessage";
import Loading from "./Screan/Loading";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

export default function Navigate() {
    
  return <NavigationContainer>
  <Stack.Navigator>                
      
<Stack.Screen
 options={{ headerShown: false }} name='Chat' component={Screan1}
      />         
            
<Stack.Screen
 name='ScreanMessage' component={ScreanMessage}
      />         
<Stack.Screen
 name='Setup' component={Setup}
      />         
  </Stack.Navigator>
</NavigationContainer>
}

function Screan1() {
    
    return  <Tab.Navigator

      screenOptions={({route})=> ({
        //tabBarStyle: [{ display: "none" }, null],
        headerTitleAlign: 'center',

        
        tabBarIcon: ({focused,size,colur}) => {
          let iconName;
          if(route.name ==="Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          }

          else if(route.name ==="Admin") {
            iconName = focused ? "construct" : "construct-outline";
          }
          else if(route.name ==="Accaunt") {
            iconName = focused ? "md-settings-sharp" : "ios-settings-outline";
          }
          return <Ionic name={iconName} size={size} colour={colur}/>
        },
      })}>
        
        <Tab.Screen name='Home' component={Main}/>
        {global.admin && <Tab.Screen  name='Admin' component={Setings}/>}
        <Tab.Screen name='Accaunt' component={Accaunt}/>
        
      </Tab.Navigator>
   
}

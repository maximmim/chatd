import Main from "./Screan/Main"

import { createStackNavigator } from '@react-navigation/stack';
import Ionic from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setings from "./Screan/Setings";

import Setup from "./Screan/Setup";
import { NavigationContainer } from '@react-navigation/native';
import { useState,useEffect, useRef} from 'react';
import Navig from "./navig";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()


export default function Navigate() {
    
    return <NavigationContainer>

        <Tab.Navigator

      screenOptions={({route})=> ({
        tabBarStyle: [{ display: "none" }, null],
        headerTitleAlign: 'center',

        
        tabBarIcon: ({focused,size,colur}) => {
          let iconName;
          if(route.name ==="Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          }

          else if(route.name ==="Admin") {
            iconName = focused ? "construct" : "construct-outline";
          }

          return <Ionic name={iconName} size={size} colour={colur}/>
        },
      })}>
        
        <Tab.Screen options={{ headerShown: false }} name='Home' component={Main}/>
        <Tab.Screen options={{ headerShown: false }} name='Admin' component={Setings}/>

        
      </Tab.Navigator>
    </NavigationContainer>
}

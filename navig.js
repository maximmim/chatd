import Ionic from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setings from "./Screan/Setings";
import Main from "./Screan/Main";
import Setup from "./Screan/Setup";
import { NavigationContainer } from '@react-navigation/native';
import { useState,useEffect, useRef} from 'react';
const hideSecondTab = true 
{/*<Tab.Screen name='Text' component={Dext}/>*/}
export default function Navig() {
  const Tab = createBottomTabNavigator()
  const [g, setg] = useState(false);
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=> ({
        tabBarIcon: ({focused,size,colur}) => {
          let iconName;
          if(route.name ==="Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          }
          else if(route.name ==="Post") {
            iconName = focused ? "ios-send" : "ios-send-outline";
          }
          else if(route.name ==="Text") {
            iconName = focused ? "ios-document-text" : "ios-document-text-outline";
          }
          return <Ionic name={iconName} size={size} colour={colur}/>
        },
      })}>
        
        <Tab.Screen name='Home' component={Main}/>
        <Tab.Screen name='Text' component={Setings}/>
        <Tab.Screen name='Post' component={Setup}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}




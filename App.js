import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './component/Cart'
import HomeScreen from './component/HomeScreen';
import Content from './component/Content';
import Detail from './component/ProductDetail';
import Login from './component/Login';
import Setting from './component/Setting';

const Stack = createNativeStackNavigator();

 export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen  name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Content" component={Content}/>
        <Stack.Screen name="Settings" component={Setting}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
import {React} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RealEstateScreen from './app/screens/RealEstateScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' 
        component={WelcomeScreen} 
        options={{headerShown: false}}/>

        <Stack.Screen name='Register' 
        component={RegisterScreen}/>

        <Stack.Screen name='Login' 
        component={LoginScreen}/>

        <Stack.Screen name='RealEstate'
        component={RealEstateScreen}
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}
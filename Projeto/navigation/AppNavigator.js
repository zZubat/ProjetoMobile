import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe as telas que farão parte da navegação
import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen'; // Adicione outras telas aqui

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho de navegação padrão
        />
        {/* Adicione outras telas aqui, por exemplo: */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
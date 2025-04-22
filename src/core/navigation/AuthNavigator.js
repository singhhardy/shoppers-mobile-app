import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../../screens/auth/LoginScreen'
import HomeScreen from '../../screens/home/HomeScreen'

const Stack = createStackNavigator()

const AuthNavigator = ({ setIsAuthenticated }) => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator
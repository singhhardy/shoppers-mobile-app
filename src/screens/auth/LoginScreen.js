import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { loginStart, loginSuccess, loginFailure, loginUser } from '../../redux/slices/auth/authSlice';
import { useDispatch } from 'react-redux';
import authService from '../../redux/slices/auth/authService';

const LoginScreen = ({ navigation, setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleLogin = async () => {
      console.log('Login button clicked');
      dispatch(loginStart());
    
      try {
        const response = await authService.login(email, password);
        dispatch(loginSuccess(response.user));
      } catch (err) {
        dispatch(loginFailure('Invalid credentials'));
        console.log('Login failed', err);
      }
    };

    return (
        <View style={styles.container}>
        <Text variant="titleLarge" style={styles.heading}>Login</Text>
  
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
        />
  
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          style={styles.input}
        />
  
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    heading: {
      marginBottom: 24,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    input: {
      marginBottom: 16,
    },
    button: {
      marginTop: 8,
      paddingVertical: 6,
    },
  });
  
export default LoginScreen;

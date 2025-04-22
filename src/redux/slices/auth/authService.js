import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../core/utils/api'

const authService = {
    
    login: async (email, password) => {
        try{
            const response = await api.post('/auth/login', {email, password});
            const token = response.data.token
            console.log(response.data)
            await AsyncStorage.setItem('token', token)
            return response.data
        } catch(error){
            throw error.response ? error.response.data : new Error('An Error Occurred')
        }
    },

    getToken: async () => {
        try{
            const token = AsyncStorage.getItem('token')
            return token
        } catch(error){
            throw new Error('Failed to get Token')
        }
    },

    logout: async() => {
        try{
            await AsyncStorage.removeItem('token')
            return true
        } catch(error) {
            throw new Error('Failed to Logout')
        }
    }
}

export default authService
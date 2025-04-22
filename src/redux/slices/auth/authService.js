import api from '../../../core/utils/api'

const authService = {
    
    login: async (email, password) => {
        try{
            const response = await api.post('/auth/login', {email, password});
            console.log(response)
            return response.data
        } catch(error){
            throw error.response ? error.response.data : new Error('An Error Occurred')
        }
    }
}

export default authService
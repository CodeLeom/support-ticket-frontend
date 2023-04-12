import axios from 'axios'

const base_url = 'https://support-ticket-api-u44r.onrender.com'
const API_URL = `${base_url}/api/users/`

// Register User
const register = async (userData) => {
    const res = await axios.post(API_URL, userData)

    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}
// Login User
const login = async (userData) => {
    const res = await axios.post(API_URL + 'login', userData)

    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
    register,
    logout,
    login,
}

export default authService
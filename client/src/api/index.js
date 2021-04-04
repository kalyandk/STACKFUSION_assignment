import axios from 'axios'

// Development url
// const API = axios.create({ baseURL: 'http://localhost:5000' })

// Production url
const API = axios.create({ baseURL: 'https://assignment-dk.herokuapp.com/' })

export const fetchUsers = () => API.get('/users')
export const register = (formData) => API.post('/users/register', formData)
export const login = (formData) => API.post('/users/login', formData)
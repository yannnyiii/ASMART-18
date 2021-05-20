import { login } from '@/api/login'
import axios from 'axios'
 
const user = {
  actions: {
    Login({ commit }, userInfo) { 
      const username = userInfo.username.trim()
      const password = userInfo.password.trim()
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/admin/login',{
          username,
          password
        })
          .then(response => {
          commit('') 
          resolve(response) 
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default user

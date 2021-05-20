import request from '@/utils/request'
import axios from 'axios'

export function login(username, password) {
  return axios({
    baseURL: 'http://localhost:3000',
    url: '/admin/login',
    methods: 'post',
    data: {
      username,
      password,
    }
  })
}

import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://628ffbe7665ea71fe12b6c87.mockapi.io/api',
})

export default instance

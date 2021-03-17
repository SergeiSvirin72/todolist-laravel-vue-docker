import axios from 'axios'

const api = {
  index() {
    return axios.get(process.env.VUE_APP_API_URL + '/todos')
  },
  store(body) {
    return axios.post(process.env.VUE_APP_API_URL + '/todos', body)
  },
  update(id, body) {
    return axios.put(process.env.VUE_APP_API_URL + '/todos/' + id, body)
  },
  destroy(id) {
    return axios.delete(process.env.VUE_APP_API_URL + '/todos/' + id)
  }
}

export default api
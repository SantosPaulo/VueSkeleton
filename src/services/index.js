import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token') || ''}`

Vue.http.interceptor.before = (request, next) => {
  next()
}

export default Vue

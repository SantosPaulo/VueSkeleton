import Service from './index'

const resourceUser = Service.resource('https://jsonplaceholder.typicode.com/posts/1')

export default {
  getUsers (dates) {
    return resourceUser.get()
  }
}

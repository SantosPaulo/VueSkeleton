import * as types from './mutation-types'
import User from '@/services/User'

export default {
  GetData ({ commit, state }) {
    return new Promise((resolve, reject) => {
      User.getUsers().then((res) => {
        commit(types.BASE_MODULE_SET, res.body)
        resolve(res.body)
      }, err => {
        commit(types.BASE_MODULE_ERROR)
        reject(err)
      })
    })
  }
}

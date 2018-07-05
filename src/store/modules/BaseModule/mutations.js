
import * as types from './mutation-types'
import StoreStatus from '@/store/status'
import { InitialState } from './initial-state'

export default {
  [types.BASE_MODULE_LOADING] (state) {
    state.status = StoreStatus.loading
  },
  [types.BASE_MODULE_SET] (state, users) {
    state.users = users
    state.status = StoreStatus.ready
  },
  [types.BASE_MODULE_RESET] (state) {
    state.status = InitialState
  },
  [types.BASE_MODULE_ERROR] (state) {
    state.status = StoreStatus.error
  }
}

import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.$store.dispatch('BaseModule/GetData')
  },
  computed: {
    ...mapState({
      'Users': state => state.BaseModule.users
    })
  }
}

import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import UserItems from './modules/UserItems'
import OptionalItems from './modules/OptionalItems'
import SelectedUserItems from './modules/SelectedUserItems'
import SelectedOptionalItem from './modules/SelectedOptionalItem'

export default createStore({
  modules: {
    UserItems,
    OptionalItems,
    SelectedUserItems,
    SelectedOptionalItem
  },
  plugins: [createPersistedState]
})
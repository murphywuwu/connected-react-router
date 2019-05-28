import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'

const rootReducer = (history) => combineReducers({
  count: counterReducer,
  // connectRouter作用：生成reducer。
  // 传入history，初始化reducer中的location以及action
  router: connectRouter(history)
})

export default rootReducer

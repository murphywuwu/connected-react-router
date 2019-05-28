import { LOCATION_CHANGE } from './actions'

const createConnectRouter = (structure) => {
  const {
    fromJS,
    merge,
  } = structure

  const createRouterReducer = (history) => {
    // 全局提供location以及action数据
    const initialRouterState = fromJS({
      location: history.location,
      action: history.action,
    })

    /*
    * This reducer will update the state with the most recent location history
    * has transitioned to.
    */
    return (state = initialRouterState, { type, payload } = {}) => {
      if (type === LOCATION_CHANGE) {
        const { location, action, isFirstRendering } = payload
        // Don't update the state ref for the first rendering
        // to prevent the double-rendering issue on initilization
        // 第一次渲染，不需要更新state为了防止初始时，重复更新
        return isFirstRendering
          ? state
          : merge(state, { location: fromJS(location), action })
      }

      return state
    }
  }

  return createRouterReducer
}

export default createConnectRouter

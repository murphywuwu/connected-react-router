import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

const App = ({ history }) => {
  return (
    /*
     * ConnectedRouter作用
     * 全局监听history，并触发LOCATION_CHANGE action. 
     * 使的路由和store中的信息同步
     */
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App

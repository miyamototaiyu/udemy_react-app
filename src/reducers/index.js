import { combineReducers } from 'redux'

import events from './events'
import opreationLogs from './opreationLogs'

export default combineReducers({
  events,
  opreationLogs
})
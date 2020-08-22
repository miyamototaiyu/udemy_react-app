import {
  ADD_OPREATION_LOG,
  DELETE_ALL_OPREATION_LOG
} from '../actions'

const opreationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPREATION_LOG:
      const opreationLog = {
        description: action.description,
        opreatedAt: action.opreatedAt
      }
      return [opreationLog, ...state]
    case DELETE_ALL_OPREATION_LOG:
      return []
    default:
      return state
  }
}

export default opreationLogs
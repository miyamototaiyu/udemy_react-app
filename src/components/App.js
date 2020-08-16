import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import Events from './Events'
import EventForm from './EventForm'
import AppContext from '../contexts/AppContext'

const App = () => {
  // stateで状態を管理
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'hello'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App;

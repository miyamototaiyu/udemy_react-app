import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import Event from './Event'

const App = () => {
  // stateで状態を管理
  const [state, dispatch] = useReducer(reducer, [])
  // title, bodyは初期状態は空
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // イベント作成がクリックされたら
  const addEvent = e => {
    // 画面のリロードをなくす
    e.preventDefault()
    // reducerのdispatchをここで呼べる
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    // input内の初期valueをここで空にする
    // イベント作成後、フォームの中身が空になる 
    setTitle('')
    setBody('')
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="title">タイトル</label>
          <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="body">ボディ</label>
          <textarea type="text" className="form-control" id="body" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />)) }
        </tbody>
      </table>
    </div>
  )
}

export default App;

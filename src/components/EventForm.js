import React, { useState, useContext } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  // title, bodyは初期状態は空
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // イベント作成がクリックされたら
  const addEvent = e => {
    // 画面のリロードをなくす
    e.preventDefault()
    // reducerのdispatchをここで呼べる
    const hoge = dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
    
    // input内の初期valueをここで空にする
    // イベント作成後、フォームの中身が空になる 
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) dispatch({ type: DELETE_ALL_EVENTS })
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
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
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>
      </form>
    </>
  )
}

export default EventForm
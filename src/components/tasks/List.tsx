import Form from './Form'
import { useState } from 'react'

function List({ name, init }) {
  const [shoppingList, setShoppingList] = useState(init)
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  function addTask(e) {
    if (!e) {
      alert('Nothing!!!')
    } else {
      setShoppingList([
        ...shoppingList,
        ...[
          {
            id: Math.random().toString(36).substring(2, 9),
            task: e,
            complete: false,
          },
        ],
      ])
    }
  }

  function changeComplete(id) {
    setShoppingList([...shoppingList.map((el) => (el.id === id ? { ...el, complete: !el.complete } : { ...el }))])
  }

  function removeEl(id) {
    setShoppingList([...shoppingList.filter((el) => el.id !== id)])
  }

  function handleSubmit(e) {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  const listItems = shoppingList.map((el, index) => (
    <li key={index} className={el.complete ? 'checked' : ''}>
      <div className="check" onClick={() => changeComplete(el.id)}></div>
      <div className="title" onClick={() => changeComplete(el.id)}>
        {el.task}{' '}
      </div>
      <div className="remove" onClick={() => removeEl(el.id)}>
        <img src={require('../../img/remove.png')}></img>
      </div>
    </li>
  ))

  return (
    <div className="panel panel-tasklist">
      <div className="header">
        <div className="title">
          {name} ({shoppingList.length})
        </div>
      </div>
      <div className="newItem">
        <div className="text">
          <span className="title">Add new item</span>
        </div>
      </div>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} userInput={userInput} />
      <ul>{listItems}</ul>
    </div>
  )
}

export default List

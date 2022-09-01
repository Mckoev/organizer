import Form from './Form'
import {useState} from 'react'

function List({name, initialStandartValue, store, textTitle}) {
    const initialValue = localStorage.getItem(store)
    const [list, setList] = useState(initialValue ? JSON.parse(initialValue) : initialStandartValue)
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    function addTask(e) {
        if (!e) {
            alert('Nothing!!!')
        } else {
            const newList = [
                ...list,
                ...[
                    {
                        id: Math.random().toString(36).substring(2, 9),
                        task: e,
                        complete: false,
                    },
                ],
            ]
            setList(newList)
            localStorage.setItem(store, JSON.stringify(newList))
        }
    }

    function changeElement(id) {
        const newList = [...list.map((el) => (el.id === id ? {...el, complete: !el.complete} : {...el}))]
        setList(newList)
        localStorage.setItem(store, JSON.stringify(newList))
    }

    function removeEl(id) {
        const newList = [...list.filter((el) => el.id !== id)]
        setList(newList)
        localStorage.setItem(store, JSON.stringify(newList))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const listItems = list.map((el, index) => (
        <li key={index} className={el.complete ? 'checked' : ''}>
            <div className="check" onClick={() => changeElement(el.id)}></div>
            <div className="title" onClick={() => changeElement(el.id)}>
                {el.task}
            </div>
            <div className="remove" onClick={() => removeEl(el.id)}>
                <img src={require('../../img/remove.png')} alt='remove'></img>
            </div>
        </li>
    ))

    return (
        <div className="panel panel-tasklist">
            <div className="header">
                <div className="title">
                    {name} ({list.length})
                </div>
            </div>
            <div className="newItem">
                <div className="text">
                    <span className="title">add new {textTitle}:</span>
                </div>
            </div>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} userInput={userInput}/>
            <ul>{listItems}</ul>
        </div>
    )
}

export default List

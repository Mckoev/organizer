import { useState } from 'react'
import { initShopList, shoppingList } from '../tasks/initialData'

function PanelTasks() {
  const initialValue = localStorage.getItem(shoppingList)

  const [list, setList] = useState(initialValue ? JSON.parse(initialValue) : initShopList)

  const listItems = list.map((el, index) => (
    <li key={index} className={el.complete ? 'checked' : ''}>
      <div className="check"></div>
      <div className="title">{el.task}</div>
    </li>
  ))

  return (
    <div className="panel panel-tasks">
      <ul>
        {/* <li className="checked">
          <div className="check"></div>
          <div className="title">Milk</div>
        </li>
        <li>
          <div className="check"></div>
          <div className="title">Bread & cheese</div>
        </li>
        <li>
          <div className="check"></div>
          <div className="title">Beer & wine</div>
        </li> */}

        {listItems}

        <li className="other">
          <div className="plus"></div>
          <div className="title">... and 15 other tasks</div>
        </li>
      </ul>
    </div>
  )
}

export default PanelTasks

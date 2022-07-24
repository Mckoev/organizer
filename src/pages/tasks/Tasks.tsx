import React from 'react'
import './tasks.css'

function Tasks() {
  return (
    <div className="page page-tasks">
      <div className="bg"></div>
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="panel panel-tasklist">
          <div className="header">
            <div className="title">Shopping list (4)</div>
          </div>
          <div className="newItem">
            <div className="text">
              <img src={require('../../img/plus.png')}/>
              <span className="title">Add new item</span>
            </div>
            <input type="text" placeholder="Add new item" />
          </div>
          <ul>
            <li className="checked">
              <div className="check"></div>
              <div className="title">Milk</div>
            </li>
            <li>
              <div className="check"></div>
              <div className="title">Bread</div>
            </li>
            <li>
              <div className="check"></div>
              <div className="title">Cheese</div>
            </li>
            <li>
              <div className="check"></div>
              <div className="title">Beer</div>
            </li>
          </ul>
        </div>
        <div className="panel panel-tasklist">
          <div className="header">
            <div className="title">To-do list (5)</div>
          </div>
          <div className="newItem">
            <div className="text">
              <img src={require('../../img/plus.png')}/>
              <span className="title">Add new item</span>
            </div>
            <input type="text" placeholder="Add new item" />
          </div>
          <ul>
            <li>
              <div className="check"></div>
              <div className="title">Cleaning</div>
            </li>
            <li>
              <div className="check"></div>
              <div className="title">Washing</div>
            </li>
            <li>
              <div className="check"></div>
              <div className="title">Shopping</div>
            </li>
            <li className="checked">
              <div className="check"></div>
              <div className="title">Pay bills</div>
            </li>
            <li>
              <div className="check"></div>
              <div className="title">Dusting</div>
            </li>
          </ul>
        </div>
        <div className="panel panel-tasklist">
          <div className="header">
            <div className="title">Long-term tasks (3)</div>
          </div>
          <div className="newItem">
            <div className="text">
              <img src={require('../../img/plus.png')}/>
              <span className="title">Add new item</span>
            </div>
            <input type="text" placeholder="Add new item" />
          </div>
          <ul>
            <li>
              <div className="check"></div>
              <div className="title">Prepare boiler</div>
            </li>
            <li>
              <div className="check"></div>
              <div className="title">Buy a sofa</div>
            </li>
            <li>
              <div className="check"></div>
              <div className="title">Car service</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Tasks

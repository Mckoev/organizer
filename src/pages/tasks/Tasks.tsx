import './tasks.css'
import List from '../../components/tasks/List'
import { LISTS_NAMES } from '../../components/tasks/initialData'
import { initShopList, initTodoList, initLongtermTasks, shoppingList, todoList, longtermTasks } from '../../components/tasks/initialData'

function Tasks() {
  return (
    <div className="page page-tasks">
      <div className="bg"></div>
      <div className="overlay"></div>
      <div className="wrapper">
        <List name={LISTS_NAMES.shoppingList} initialStandartValue={initShopList} store={shoppingList} />
        <List name={LISTS_NAMES.todoList} initialStandartValue={initTodoList} store={todoList} />
        <List name={LISTS_NAMES.longtermTasks} initialStandartValue={initLongtermTasks} store={longtermTasks} />
      </div>
    </div>
  )
}

export default Tasks

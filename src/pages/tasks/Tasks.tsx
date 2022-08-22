import './tasks.css'
import List from '../../components/tasks/List'
import { LISTS_NAMES } from '../../components/tasks/initialData'
import { initShopList, initTodoList, initLongtermTasks } from '../../components/tasks/initialData'

function Tasks() {
  return (
    <div className="page page-tasks">
      <div className="bg"></div>
      <div className="overlay"></div>
      <div className="wrapper">
        <List name={LISTS_NAMES.shoppingList} init={initShopList} />
        <List name={LISTS_NAMES.todoList} init={initTodoList} />
        <List name={LISTS_NAMES.longtermTasks} init={initLongtermTasks} />
      </div>
    </div>
  )
}

export default Tasks

import {useState} from 'react'
import {shoppingList} from '../tasks/initialData'
import {initShopList} from "../../mock/mock";
import {useAppSelector} from "../../reduxToolkit/hooks";

function PanelTasks() {
    const initialValue = localStorage.getItem(shoppingList)

    const [list, setList] = useState(initialValue ? JSON.parse(initialValue) : initShopList)

    const listItems = list.slice(0, 3).map((el, index) => (
        <li key={index} className={el.complete ? 'checked' : ''}>
            <div className="check"></div>
            <div className="title">{el.task}</div>
        </li>
    ))

    const isManyTasks = list.length - list.slice(0, 3).length > 0

    return (
        <div className="panel panel-tasks">
            <ul>
                {listItems}
                {isManyTasks ?
                    <li className="other">
                        <div className="plus"></div>
                        <div className="title">... and {list.length - list.slice(0, 3).length} other tasks</div>
                    </li>
                    : <></>}
            </ul>
        </div>
    )
}

export default PanelTasks

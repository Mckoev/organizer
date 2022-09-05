import { initShopList } from 'mock/mock';
import { ITask } from 'types/interfaices';
import { LISTS_NAMES } from 'constants/constanst';

function PanelTasks() {
    const initialValue: string | null = localStorage.getItem(LISTS_NAMES.SHOPPING_LIST);
    const list: ITask[] = initialValue ? JSON.parse(initialValue) : initShopList;

    const listItems = list.slice(0, 3).map((el, index) => (
        <li key={index} className={el.complete ? 'checked' : ''}>
            <div className='check' />
            <div className='title'>{el.task}</div>
        </li>
    ));

    const isManyTasks = list.length - list.slice(0, 3).length > 0;

    return (
        <div className='panel panel-tasks'>
            <ul>
                {listItems}
                {isManyTasks ? (
                    <li className='other'>
                        <div className='plus' />
                        <div className='title'>... and {list.length - list.slice(0, 3).length} other tasks</div>
                    </li>
                ) : (
                    <></>
                )}
            </ul>
        </div>
    );
}

export default PanelTasks;

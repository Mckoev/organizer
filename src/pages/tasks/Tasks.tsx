import 'pages/tasks/tasks.module.scss';
import { LISTS_NAMES, TITLES } from 'constants/constanst';
import { initLongTermTasks, initShopList, initTodoList } from 'mock/mock';
import styles from './tasks.module.scss';
import 'App.module.scss';
import List from '../../components/Tasks/List';

function Tasks() {
    return (
        <div className={styles.tasks}>
            <div className={styles.lists}>
                <List name={LISTS_NAMES.SHOPPING_LIST} initialStandardValue={initShopList} store={LISTS_NAMES.SHOPPING_LIST} textTitle={TITLES.PURCHASE} />
                <List name={LISTS_NAMES.TODO_LIST} initialStandardValue={initTodoList} store={LISTS_NAMES.TODO_LIST} textTitle={TITLES.TODO} />
                <List name={LISTS_NAMES.LONG_TERM_TASKS} initialStandardValue={initLongTermTasks} store={LISTS_NAMES.LONG_TERM_TASKS} textTitle={TITLES.TASK} />
            </div>
        </div>
    );
}

export default Tasks;

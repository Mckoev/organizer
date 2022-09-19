import { IFormTask } from 'types/interfaices';
import plusIcon from 'img/plus.png';
import styles from 'pages/tasks/tasks.module.scss';

function Form({ handleSubmit, userInput, handleChange }: IFormTask) {
    return (
        <form className={styles.formTasks} onSubmit={(e) => handleSubmit(e)}>
            <input className={styles.formTasks__input} value={userInput} type='text' onChange={handleChange} />
            <button className={styles.formTasks__button} type='button' onClick={(e) => handleSubmit(e)}>
                <img className={styles.formTasks__img} src={plusIcon} alt='plus' />
            </button>
        </form>
    );
}

export default Form;

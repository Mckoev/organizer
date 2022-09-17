import { IFormTask } from 'types/interfaices';
import plusIcon from 'img/plus.png';
import styles from 'pages/tasks/tasks.module.scss';

function Form({ handleSubmit, userInput, handleChange }: IFormTask) {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={userInput} type='text' onChange={handleChange} />
            <button type='button' className={styles.buttonPlus} onClick={(e) => handleSubmit(e)}>
                <img className={styles.icon} src={plusIcon} alt='plus' />
            </button>
        </form>
    );
}

export default Form;

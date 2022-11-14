import { IFormCalendar } from "types/interfaices";
import styles from "pages/calendar/calendar.module.scss";

/* eslint-disable */

function Form({
    handleSubmit,
    userInput,
    handleChange,
    userInputTimeStart,
    userInputTimeFinish,
    handleChangeTimeStart,
    handleChangeTimeFinish,
}: IFormCalendar) {

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.formCalendar}>
            <div className={styles.formCalendar__groupInputs}>
                <div className={styles.formCalendar__group}>
                    <label htmlFor='name' className={styles.formCalendar__form__label}>
                        Input time to start event:
                    </label>
                    <input type='time' className={styles.formCalendar__form__field} value={userInputTimeStart} onChange={handleChangeTimeStart} />
                </div>
                <div className={styles.formCalendar__group}>
                    <label htmlFor='name' className={styles.formCalendar__form__label}>
                        Input time to finish event:
                    </label>
                    <input type='time' className={styles.formCalendar__form__field} value={userInputTimeFinish} onChange={handleChangeTimeFinish} />
                </div>
                <div className={styles.formCalendar__group}>
                    <label htmlFor='name' className={styles.formCalendar__form__label}>
                        Text event:
                    </label>
                    <input value={userInput} type='text' onChange={handleChange} className={styles.formCalendar__form__field} />
                </div>
            </div>
            <div className={styles.formCalendar__button} onClick={(e) => handleSubmit(e)}>Создать</div>
        </form>
    );
}

export default Form;

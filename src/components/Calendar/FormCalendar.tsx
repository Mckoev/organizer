import { IFormCalendar } from 'types/interfaices';
import plusIcon from 'img/plus.png';

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
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='time' value={userInputTimeStart} onChange={handleChangeTimeStart} />
            <input type='time' value={userInputTimeFinish} onChange={handleChangeTimeFinish} />
            <input value={userInput} type='text' onChange={handleChange} />
            <button type='button'>
                <img className='icon' src={plusIcon} alt='plus' />
            </button>
        </form>
    );
}

export default Form;

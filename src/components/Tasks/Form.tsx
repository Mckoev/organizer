import { IFormTask } from 'types/interfaices';
import plusIcon from 'img/plus.png';

function Form({ handleSubmit, userInput, handleChange }: IFormTask) {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={userInput} type='text' onChange={handleChange} />
            <button type='button'>
                <img className='icon' src={plusIcon} alt='plus' />
            </button>
        </form>
    );
}

export default Form;

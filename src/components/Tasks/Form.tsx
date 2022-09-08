import { IFormTask } from 'types/interfaices';
import plusIcon from 'img/plus.png';

function Form({ handleSubmit, userInput, handleChange }: IFormTask) {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={userInput} type='text' onChange={handleChange} />
            <button type='button' className='button' onClick={(e) => handleSubmit(e)}>
                <img className='icon' src={plusIcon} alt='plus' />
            </button>
        </form>
    );
}

export default Form;

import { IFormCalendar } from 'types/interfaices';

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
        <form onSubmit={(e) => handleSubmit(e)} className='form__group-form-inputs'>
            <div className='form__group-inputs'>
                <div className='form__group field'>
                    <input type='time' className='form__field' value={userInputTimeStart} onChange={handleChangeTimeStart} />
                    <label htmlFor='name' className='form__label'>
                        Input time to start event:
                    </label>
                </div>
                <div className='form__group field'>
                    <input type='time' className='form__field' value={userInputTimeFinish} onChange={handleChangeTimeFinish} />
                    <label htmlFor='name' className='form__label'>
                        Input time to finish event:
                    </label>
                </div>
                <div className='form__group field'>
                    <input value={userInput} type='text' onChange={handleChange} className='input-event form__field' />
                    <label htmlFor='name' className='form__label'>
                        Text event:
                    </label>
                </div>
            </div>
            <div className='button-calendar' onClick={(e) => handleSubmit(e)}>
                <div className='outer'>
                    <div className='height'>
                        <div className='inner'>Создать</div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;

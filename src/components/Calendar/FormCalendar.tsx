function Form({
    handleSubmit,
    userInput,
    handleChange,
    userInputTimeStart,
    userInputTimeFinish,
    handleChangeTimeStart,
    handleChangeTimeFinish,
}) {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type='time'
                value={userInputTimeStart}
                onChange={handleChangeTimeStart}
            />
            <input
                type='time'
                value={userInputTimeFinish}
                onChange={handleChangeTimeFinish}
            />
            <input value={userInput} type='text' onChange={handleChange} />
            <button>
                <img
                    className='icon'
                    src={require('../../img/plus.png')}
                    alt='plus'
                />
            </button>
        </form>
    );
}

export default Form;

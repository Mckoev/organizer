function Form({handleSubmit, userInput, handleChange}) {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={userInput} type="text" onChange={handleChange}/>
            <button>
                <img className='icon' src={require('../../img/plus.png')} alt='plus'/>
            </button>
        </form>
    )
}

export default Form

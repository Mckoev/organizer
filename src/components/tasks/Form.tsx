function Form({ handleSubmit, userInput, handleChange }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input value={userInput} type="text" onChange={handleChange} />
      <button>
        <img src={require('../../img/plus.png')} />
      </button>
    </form>
  )
}

export default Form

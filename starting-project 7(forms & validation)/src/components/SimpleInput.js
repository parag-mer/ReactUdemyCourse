import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName , setEnteredName] = useState('');
  const [enteredNameTouched , setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredNameHandler = event => {
    setEnteredName(event.target.value);
  }
  
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);    
  }
  
  const formHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(!enteredNameIsValid)
    {
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);

  }
  

  const nameInputClass = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
        {nameInputIsInvalid && <p className='error-text'>invalid input</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

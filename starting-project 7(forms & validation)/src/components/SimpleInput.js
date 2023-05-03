import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName , setEnteredName] = useState();
  const enteredNameHandler = event => {
    setEnteredName(event.target.value);
  }

  const formHandler = event => {
    event.preventDefault();
    console.log(enteredName);
  }

  return (
    <form onSubmit={formHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""); //ketu te useState e kem string te thate, se n fillim inputi eshte null
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, enteredUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
    // dmth per mos me hup te dhenat tjera, duhet me i kopju me ni array te ri
    // enteredUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
    // enteredUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
    // enteredUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const expeseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expeseDate);
    props.onSaveExpenseData(expeseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const [showDiv, setShowDiv] = useState(false)
  const showForm = () =>{
    setShowDiv(true)
  }
  const hideForm = () => {
    setShowDiv(false)
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        {showDiv && (<div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>)}
        {showDiv && (<div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>)}
        {showDiv && (<div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>)}
        <div className='new-expense__actions'>
        {showDiv && (<button onClick={hideForm}>Cancel</button>)}
          <button type="submit" onClick={showForm}>Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;

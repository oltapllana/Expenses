import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'


const ExpensesList = (props) => {

if(props.items.length===0){
    return( <h2 className="expenses-list__fallback">Found no expenses.</h2> )
}

    return( <ul className="expenses-list">
        {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
    ))}
    </ul>
      );
};

export default ExpensesList;
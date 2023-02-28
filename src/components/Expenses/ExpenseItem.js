import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);//useState na kthen nje array, me anen e majt e bojme destrukt
  // const clickHandler = ()=>{                      //elementi i pare eshte seni qe podojme me ndrru, i dyti funskioni
  //   setTitle('Updateed!')
  // };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
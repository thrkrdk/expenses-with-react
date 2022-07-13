import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>13.07.2022</div>
      <div className="expense-item__description">
        <h2>IPhone</h2>
        <div className="expense-item__price">29TL</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

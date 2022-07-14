import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const years = Array.from(
    { length: 10 },
    (v, i) => (new Date().getFullYear() + 1) - i
  );

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {years.map((year) => (
            <option key= {year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

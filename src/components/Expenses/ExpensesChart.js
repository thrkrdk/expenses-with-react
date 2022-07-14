import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = Array.from({ length: 12 }, (e, i) => {
    return {
      label: new Date(null, i + 1, null).toLocaleDateString("en", {
        month: "short",
      }),
      value: 0,
    };
  });
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

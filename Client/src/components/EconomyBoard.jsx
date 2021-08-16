const EconomyBoard = ({ data }) => {
  return (
    <span>
      Total Revenue: <p>{data.totalRevenue}</p>
      Total Expanses: <p>{data.totalExpenses}</p>
      Money Left: <p>{data.revenueLeft}</p>
    </span>
  );
};

export default EconomyBoard;

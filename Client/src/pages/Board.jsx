import { useContext, useState } from "react";
import { boardWrapper, inputs } from "../styles/Board.module.scss";
import SumInput from "../components/SumInput";
import EconomyBoard from "../components/EconomyBoard";
import HistoryList from "../components/HistoryList";
import { HistoryContext } from "../contexts/HistoryProvider";

const Board = () => {
  const { expenses, revenues } = useContext(HistoryContext)
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [revenueLeft, setRevenueLeft] = useState(0);

  const setAmount = (values) => {
    if (values.name === "revenue") {
      setTotalRevenue(totalRevenue + values.sum);
      setRevenueLeft(revenueLeft + values.sum);
    } else {
      setTotalExpenses(totalExpenses + values.sum);
      setRevenueLeft(revenueLeft - values.sum);
    }
  };

  const economyBoardValues = {
    totalExpenses,
    totalRevenue,
    revenueLeft,
  };
  return (
    <div className={boardWrapper}>
      <div className={inputs}>
        <SumInput
          data={{ name: "revenue", label: "Add to your revenue", setAmount }}
        />
        <HistoryList list={revenues} title={"Revenues: "} />
        <SumInput
          data={{ name: "expense", label: "Add to your expenses", setAmount }}
        />
        <HistoryList list={expenses} title={"Expenses: "} />
      </div>
      <EconomyBoard data={economyBoardValues} />
    </div>
  );
};

export default Board;

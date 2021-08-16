import { createContext, useEffect, useState } from "react";

export const HistoryContext = createContext();

const HistoryProvider = (props) => {
  const [revenues, setRevenues] = useState(JSON.parse(localStorage.getItem("revenues")) || '');
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("expenses")) || '');

  const getUserHistory = async (userId, monthId) => {
    let userHistory = await fetch(`/api/history/${userId}/${monthId}`);
    userHistory = await userHistory.json();
    categorizeHistory(userHistory);
  };

  const categorizeHistory = (history) => {
    let expenses = [];
    let revenues = [];

    history.forEach((element) =>
      element.type === "expense"
        ? expenses.push(element)
        : revenues.push(element)
    );
    localStorage.setItem("expenses", JSON.stringify(expenses))
    localStorage.setItem("revenues", JSON.stringify(revenues))
    setExpenses(expenses)
    setRevenues(revenues)
  };

  const values = { getUserHistory, expenses, revenues };
  return (
    <HistoryContext.Provider value={values}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;

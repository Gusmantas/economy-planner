import { createContext, useContext, useState } from "react";
import { HistoryContext } from "./HistoryProvider";


export const MonthContext = createContext();

const MonthProvider = (props) => {
  // Not sure activeMonthId is needed.
  const [activeMonthId, setActiveMonthId] = useState("");
  const [allMonths, setAllMonths] = useState("")
  const { getUserHistory } = useContext(HistoryContext)

  const createNewMonth = async (userId) => {
    const monthData = {
      name: new Date().toLocaleString("default", { month: "long" }),
      year: new Date().getFullYear().toString(),
      userId,
    };

    let newMonth = await fetch("/api/months", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(monthData),
    });
    newMonth = await newMonth.json();
    setActiveMonthId(newMonth);
  };

  const getUserMonths = async (userId) => {
    let userMonths = await fetch(`/api/months/${userId}`)
    userMonths = await userMonths.json();
    setAllMonths(userMonths)
    setActiveMonthId(userMonths[userMonths.length - 1].id);
    getUserHistory(userId, userMonths[userMonths.length - 1].id)
  }

  const values = {
    createNewMonth,
    getUserMonths,
    activeMonthId,
    allMonths
  };
  return (
    <MonthContext.Provider value={values}>
      {props.children}
    </MonthContext.Provider>
  );
};

export default MonthProvider;

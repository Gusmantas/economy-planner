import Home from "./pages/Home";
import UserProvider from "./contexts/UserProvider";
import MonthProvider from "./contexts/MonthProvider";
import HistoryProvider from "./contexts/HistoryProvider";

function App() {
  return (
    <div className="App">
      <HistoryProvider>
        <MonthProvider>
          <UserProvider>
            <Home />
          </UserProvider>
        </MonthProvider>
      </HistoryProvider>
    </div>
  );
}

export default App;

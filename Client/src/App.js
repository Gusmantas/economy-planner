import "./App.scss";
import Home from "./pages/Home";
import UserProvider from "./contexts/userProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;

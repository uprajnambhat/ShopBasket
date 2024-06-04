import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";
import ShoppingCartItems from "./components/ShoppingCartItems";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/shoppingCart" element={<ShoppingCartItems />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </>
  );
}
export default App;

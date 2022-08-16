import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Product from "./pages/Product";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} /> 
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;

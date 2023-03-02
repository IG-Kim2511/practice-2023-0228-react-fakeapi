import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Homejs from "./components/Homejs";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Product_js from "./components/Product_js";


function App() {
  return (
    <div className="App">

    <h4 className="title">App</h4>
      

      <Nav/>
      

        <Routes>          
            <Route index element={<Homejs/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<Product_js/>} />
            <Route path="/cart" element={<Cart/>} />
            
        </Routes>


    </div>
  );
}

export default App;
      

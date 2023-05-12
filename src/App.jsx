import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import { Admin, Cart, Contact, Home, OrderHistory } from "./pages";
import { Header, Footer, Navigation } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

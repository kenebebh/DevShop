import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Admin,
  Cart,
  Contact,
  Home,
  OrderHistory,
  ResetPassword,
  SignIn,
  SignUp,
  Orders,
  Help,
  Items,
} from "./pages";
import { Footer, Navigation } from "./components";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />

        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/help" element={<Help />} />
          <Route path="/items" element={<Items />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/history" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

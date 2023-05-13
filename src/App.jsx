import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import {
  Admin,
  Cart,
  Contact,
  Home,
  OrderHistory,
  ResetPassword,
  SignIn,
  SignUp,
} from "./pages";
import { Footer, Navigation } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/history" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

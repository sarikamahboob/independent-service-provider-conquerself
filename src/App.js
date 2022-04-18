import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Services from "./Components/Home/Services/Services";
import NotFound from "./Components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import SignIn from "./Components/Authentication/SignIn/SignIn";
import Footer from "./Components/Home/Footer/Footer";
import Service from "./Components/Home/Service/Service";
import ServiceDetail from "./Components/Home/ServiceDetail/ServiceDetail";
import { createContext, useState } from "react";
import CheckOut from "./Components/Home/CheckOut/CheckOut";
import BookedService from "./Components/Home/BookedService/BookedService";
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";

export const ServiceContext = createContext();

function App() {
  const [services, setServices] = useState([]);

  return (
    <ServiceContext.Provider value={[services, setServices]}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/bookedservice/:id" element={<BookedService />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ServiceContext.Provider>
  );
}

export default App;

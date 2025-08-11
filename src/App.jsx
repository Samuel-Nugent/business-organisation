import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import BusinessSolutions from "./pages/BusinessSolutions";
import Accounting from "./pages/Accounting";
import Marketing from "./pages/Marketing";
import HR from "./pages/HR";
import ITSolutions from "./pages/ITSolutions";
import WebDevelopment from "./pages/WebDevelopment";
import Blockchain from "./pages/Blockchain";
import AI from "./pages/AI";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      {/* <main className="pt-12 pb-12"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business-solutions/" element={<BusinessSolutions />} />
        <Route path="/business-solutions/accounting" element={<Accounting />} />
        <Route path="/business-solutions/marketing" element={<Marketing />} />
        <Route path="/business-solutions/hr" element={<HR />} />
        <Route path="/it-solutions/" element={<ITSolutions />} />
        <Route
          path="/it-solutions/web-development"
          element={<WebDevelopment />}
        />
        <Route path="/it-solutions/blockchain" element={<Blockchain />} />
        <Route path="/it-solutions/ai" element={<AI />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="text-center text-gray-600 py-20 text-xl">
              Page Not Found
            </div>
          }
        />
      </Routes>
      {/* </main> */}
      <Footer />
    </>
  );
};

export default App;

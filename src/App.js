import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Services from "./components/Services";


import "./styles/header.scss";
import "./styles/app.scss";
import "./styles/contact.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import "./styles/mediaquery.scss"


function App() {
  return (
    <Router>
      <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>


      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;

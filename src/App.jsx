import Data from "./Api's Data/Data";
import TopNavbar from "./Api's Data/TopNavbar";
import "./App.css";
// import Home from "./WebData/Home";
// import Navbar from "./WebData/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Team from "./WebData/Team";
// import Contact from "./WebData/Contact";
// import About from "./WebData/About";
// import Profile from "./WebData/Profile";
// import Sidebar from "./WebData/Sidebar";
// import Footer from "./WebData/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <TopNavbar />
    <Routes>
      <Route path="/business" element={<Data pageSize={3} request = "business"/>} />
      <Route path="/" element={<Data pageSize={3} request = "business"/>} />
      <Route path="/entertainment" element={<Data pageSize={3}  request = "entertainment"/>}/>
      <Route path="/technology" element={<Data pageSize={3} request = "technology"/>}/>
      <Route path="/sports" element={<Data pageSize={3} request = "sports"/>}/>
      <Route path="/science" element={<Data pageSize={3} request = "science"/>}/>
      <Route path="/health" element={<Data pageSize={3} request = "health"/>}/>
      <Route path="/general" element={<Data pageSize={3} request = "general" />}/>
    </Routes>
    </BrowserRouter>
      
      {/* <Data pageSize={3} /> */}
      {/* <BrowserRouter>
        <Navbar />
        <div className="parent">
          <Sidebar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/home/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter> */}
    </>
  );
}

export default App;

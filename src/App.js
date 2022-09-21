import Home from "./Components/Pages/Home/Home";
import Sidebar from './Components/Pages/Shared/Sidebar/Sidebar';
import Footer from './Components/Pages/Shared/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./Components/Pages/ProjectDetails/ProjectDetails";
import Projects from "./Components/Pages/Projects/Projects";
import ContactForm from "./Components/Pages/ContactPage/Contact";
import Blogs from "./Components/Pages/Blogs/Blogs";
import About from "./Components/Pages/About/About";

function App() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <div>
          <div className="w-full text-right">
            <label htmlFor="my-drawer-2" className="btn btn-circle btn-secondary m-4 swap swap-rotate  drawer-button lg:hidden">
              <input type="checkbox" />
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
          </div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<ContactForm></ContactForm>}></Route>
            <Route path="/projectDetails/:id" element={<ProjectDetails></ProjectDetails>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
        <div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-secondary text-base-content">
          {/* <!-- Sidebar content here --> */}
          <Sidebar></Sidebar>
        </ul>

      </div>
    </div>
  );
}

export default App;

/*

@author: Heera Singh Lodhi
@date: 04-07-2024
@desc: root of the web app application start here

*/

import "./App.css";
import Card from "./components/Card/Card.tsx";
import Navbar from "./components/Navbar/index.tsx";
import Sidebar from "./components/Sidebar/";

// import pages
import About from "./pages/about.tsx";
import Blog from "./pages/blog.tsx";
import Contact from "./pages/contact.tsx";
import Portfolio from "./pages/portfolio.tsx";
import Resume from "./pages/resume.tsx";

import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={"app flex justify-center items-center linear-gradient"}>
        <main className={"app-main grid w-full"}>
          {/* sidebar */}
          <Sidebar />
          {/* page rending */}
          <Card classes={""} id="primary">
            <Navbar />
            <ul className="tabs nav menu flex m-0">
              <li className="navbar-item tab">
                <button
                  className={`navbar-link ${
                    activeTab === "about" ? "active" : ""
                  }`}
                  data-nav-link="about"
                  onClick={() => handleTabClick("about")}
                >
                  About
                </button>
              </li>
              <li className="navbar-item tab">
                <button
                  className={`navbar-link ${
                    activeTab === "resume" ? "active" : ""
                  }`}
                  data-nav-link="resume"
                  onClick={() => handleTabClick("resume")}
                >
                  Resume
                </button>
              </li>
              <li className="navbar-item tab">
                <button
                  className={`navbar-link ${
                    activeTab === "portfolio" ? "active" : ""
                  }`}
                  data-nav-link="portfolio"
                  onClick={() => handleTabClick("portfolio")}
                >
                  Portpolio
                </button>
              </li>
              <li className="navbar-item tab">
                <button
                  className={`navbar-link ${
                    activeTab === "blog" ? "active" : ""
                  }`}
                  data-nav-link="blog"
                  onClick={() => handleTabClick("blog")}
                >
                  Blog
                </button>
              </li>
              <li className="navbar-item tab">
                <button
                  className={`navbar-link ${
                    activeTab === "contact" ? "active" : ""
                  }`}
                  data-nav-link="contact"
                  onClick={() => handleTabClick("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>

            <section
              className={`hidden ${
                activeTab === "about" ? "active" : "hidden"
              }`}
              data-page="about"
            >
              <About />
            </section>

            <section
              className={`hidden ${activeTab === "resume" ? "active" : ""}`}
              data-page="resume"
            >
              <Resume />
            </section>

            <section
              className={`hidden ${activeTab === "portfolio" ? "active" : ""}`}
              data-page="potfolio"
            >
              <Portfolio />
            </section>
            <section
              className={`hidden ${activeTab === "blog" ? "active" : ""}`}
              data-page="blog"
            >
              <Blog />
            </section>
            <section
              className={`hidden ${activeTab === "contact" ? "active" : ""}`}
              data-page="contact"
            >
              <Contact />
            </section>
          </Card>
        </main>
      </div>
    </>
  );
};

function App() {
  return <Home />;
}

export default App;

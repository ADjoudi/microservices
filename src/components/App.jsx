import { Outlet, useNavigate } from "react-router-dom";
import "../styles/App.css";
import logo from "../assets/logo.png";
import clock from "../assets/clock.svg";
import link from "../assets/link.svg";
import filter from "../assets/filter.svg";
import file from "../assets/file.svg";
import check from "../assets/check-circle.svg";
import { useEffect, useState } from "react";

const Tabs = [
  { id: "timestamp", label: "Timestamp", icon: clock },
  { id: "urlShortener", label: "URL Shortener", icon: link },
  { id: "requestHeaderParser", label: "Request Header Parser", icon: filter },
  { id: "fileMetadata", label: "File Metadata", icon: file },
  { id: "exerciseTracker", label: "Exercise Tracker", icon: check },
];

function App() {
  const [tab, setTab] = useState("timestamp");
  const navigate = useNavigate();

  const changeTab = (e) => {
    setTab(e.currentTarget.id);
  };
  useEffect(() => {
    const links = document.getElementsByClassName("tab-clicked");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("tab-clicked");
    }
    document.getElementById(tab).classList.add("tab-clicked");
    navigate(tab);
  }, [tab, navigate]);
  return (
    <div className="app">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
          <h2>MICROSERVICES</h2>
        </div>
        <ul>
          {Tabs.map((tab) => (
            <li key={tab.id} id={tab.id} onClick={changeTab}>
              <img src={tab.icon} alt="" />
              <h3>{tab.label}</h3>
            </li>
          ))}
        </ul>
      </header>
      <Outlet />
    </div>
  );
}

export default App;

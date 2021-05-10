import { useState } from 'react';
import Encounters from './Encounters.js';
import Library from './Library.js';
import Bees from './Bees.js';
import './App.css';

function App() {

  const [activeTab, setActiveTab] = useState("library");

  function handleClick(e) {
    e.preventDefault();
    const index = e.target.href.indexOf("#");
    setActiveTab(e.target.href.substring(index + 1));
  }

  let tabContent;
  switch (activeTab) {
    case "paranormal":
      tabContent = <Encounters />;
      break;
    case "bees":
      tabContent = <Bees />;
      break;
    default:
      tabContent = <Library />;
  }

  return (
    <main className="container">
      <ul className="nav">
        <li className="nav-item">
          <a href="#library" onClick={handleClick} className={"nav-link" + (activeTab === "library" ? " active" : "")}>Library</a>
        </li>
        <li className="nav-item">
          <a href="#paranormal" onClick={handleClick} className={"nav-link" + (activeTab === "paranormal" ? " active" : "")}>Paranormal Encounters</a>
        </li>
        <li className="nav-item">
          <a href="#bees" onClick={handleClick} className={"nav-link" + (activeTab === "bees" ? " active" : "")}>Bees</a>
        </li>
      </ul>
      {tabContent}
    </main >
  );
}

export default App;

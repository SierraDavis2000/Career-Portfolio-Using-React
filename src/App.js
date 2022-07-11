import React, {useState} from 'react';

import './App.css';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from "./components/Resume";


function App() {

  const [currentTab, setCurrentTab] = useState("about");
  const createTab = () => {
    switch(currentTab) {
      case "about": return <About/>
      case "portfolio": return <Portfolio/>
      case "contact": return <Contact/>
      case "resume": return <Resume/>

      default: return null;
    }
  }
  return (
    
    <div>
      
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{createTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
    </div>
  );
}

export default App;

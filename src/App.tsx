//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import Main from './pages/Main/Main';

// Top Nav with Title and settings page (tuning, guitar fretboard graphics)
// Start test button in the middle 
// Page for statisti
// Perhaps tuner (with freq analysis over WASM? 🤷‍♂️ will see...) 


const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className={"topBar"}>
        <div className={"title"}>Your Website Title</div>
        <div className={"hamburgerMenu"} onClick={toggleMenu}>
          &#9776; {/* Hamburger Menu Icon */}
        </div>
      </div>

      {/* Content */}
      <div className={"content"}>
        <Main />
      </div>

      {/* Hamburger Menu Overlay */}
      {isMenuOpen && (
        <div className={"menuOverlay"}>
          {/* Your menu items go here */}
          <div className={"menuItem"}>Menu Item 1</div>
          <div className={"menuItem"}>Menu Item 2</div>
          <div className={"menuItem"}>Menu Item 3</div>
        </div>
      )}
    </div>
  );
};


export default App;


import "./App.css";
import { useState } from "react";

import Sidepanel from "./components/Sidepanel";
import Main from "./components/Main";

function App() {
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <div className="App">
      <Sidepanel
        activeMenu={activeMenu}
        handleSetActiveMenu={(index) => setActiveMenu(index)}
      />

      <Main />
    </div>
  );
}

export default App;

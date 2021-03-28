import "./App.css";
import Description from "./component/Description";
import TitleList from "./component/TitleList";
import { createContext, useState } from "react";

export const ListContext = createContext();

function App() {
  const [idState, setIdState] = useState();

  const list = [
    { id: 1, value: "My Note1" },
    { id: 2, value: "My Note2" },
    { id: 3, value: "My Note3" },
  ];

  console.log('idState', idState);

  return (
    <>
      <ListContext.Provider value={list} >
        <div className="App">
          <h1>My Note</h1>
        </div>
        <div className="flex-container">
          <div className="flex-child">
            <TitleList className="titleListContainer" handleClick={(id) => setIdState(id)} />
          </div>
          <div className="flex-child">
            <Description className="descriptionContainer" description={idState} />
          </div>
        </div>
      </ListContext.Provider>
    </>
  );
}

export default App;

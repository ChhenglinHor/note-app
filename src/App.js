import "./App.css";
import Description from "./component/Description";
import TitleList from "./component/TitleList";
import { createContext, useState } from "react";

export const ListContext = createContext();

function App() {
  const [idState, setIdState] = useState();

  const list = [
    { id: 0, value: "My Note1", des: "My note here is something about 1" },
    { id: 1, value: "My Note2", des: "My note here is something about 2" },
    { id: 2, value: "My Note3", des: "My note here is something about 3" },
  ];

  console.log('idState', idState);
  console.log('value', list[idState]);

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
            <Description className="descriptionContainer" title={list[idState]?.value} description={list[idState]?.des} />
          </div>
        </div>
      </ListContext.Provider>
    </>
  );
}

export default App;

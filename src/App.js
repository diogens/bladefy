import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Boarder from "./components/Boarder";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Boarder />
      <GlobalStyles />
    </DndProvider>
  );
}

export default App;

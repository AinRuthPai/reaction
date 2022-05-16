import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GamePage from "./components/GamePage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

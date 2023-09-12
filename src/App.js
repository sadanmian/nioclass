import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { UserState } from "./context/Context";
import Finish from "./pages/Finish";

function App() {
  return (
    <BrowserRouter>
      <UserState>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/finish" element={<Finish />} />
          </Routes>
        </div>
      </UserState>
    </BrowserRouter>
  );
}

export default App;

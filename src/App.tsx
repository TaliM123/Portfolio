import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

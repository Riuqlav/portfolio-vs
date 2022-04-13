import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    // <BrowserRouter>
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

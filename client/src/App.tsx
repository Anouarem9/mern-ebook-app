import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEBook from "./pages/EBook/CreateEBook";

function App() {
  return (
    <Router>
      <header>EBook</header>
      <a href="/">Landing Page</a>
      <a href="/create">Create an EBook</a>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<>Landing Page</>} />
        <Route path="/create" element={<CreateEBook />} />
      </Routes>
    </Router>
  );
}

export default App;

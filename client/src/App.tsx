import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateEBook from "./pages/EBook/CreateEBook/CreateEBook";
import ListingEBooks from "./pages/EBook/ListingEBooks/ListingEBooks";
import ShowEbook from "./pages/EBook/ShowEbook/ShowEbook";

function App() {
  return (
    <Router>
      <header>EBook</header>
      <a href="/">Landing Page</a>
      <a href="/create">Create an EBook</a>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<ListingEBooks />} />
        <Route path="/create" element={<CreateEBook />} />
        <Route path="/:ISBN" element={<ShowEbook />} />
      </Routes>
    </Router>
  );
}

export default App;

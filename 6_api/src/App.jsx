import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";

function App() {
  return (
    <BrowserRouter>
      {/* 1- GET com Fetch e Axios */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>

      <Routes>
        {/* 1- GET com Fetch e Axios */}
        <Route path="/axios-posts" element={<AxiosPosts />} />
        <Route path="/fetch-posts" element={<FetchPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

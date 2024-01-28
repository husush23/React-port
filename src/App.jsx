import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { getPosts } from "./client";
import Posts from "./pages/Posts";

function App() {
  getPosts().then((data) => console.log(data));

  return (
    <main className=" font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Po />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

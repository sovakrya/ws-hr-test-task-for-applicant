import { Route, Routes, useParams } from "react-router-dom";
import HomePage from "./pages/home-page/ui/HomePage";

function App() {
  return (
    <Routes>
      <Route path="tasks/:uuid" element={<HomePage />} />
    </Routes>
  );
}

export default App;

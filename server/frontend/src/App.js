import LoginPanel from "./components/Login/Login";
import Dealers from './components/Dealers/Dealers';
import { Routes, Route } from "react-router-dom";
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
import SearchCars from "./components/Dealers/SearchCars";	

import Register from "./components/Register/Register";   // adjust path if needed

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
      <Route path="/searchcars/:id" element={<SearchCars />} />
    </Routes>
  );
}
export default App;

import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home/Home";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route path="/register" element={<Register />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
}

export default App;

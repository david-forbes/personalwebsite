import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import About from "./About";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/#/profile" element={<Profile />} />
        <Route path="/#/about" element={<About />}/>
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
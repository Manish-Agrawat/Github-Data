import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import AboutUs from "./componenets/About";
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar";
import Users from "./componenets/User";
import Page404 from "./componenets/Page404";
import UserProfile from "./componenets/UserProfile";
import SearchUser from "./componenets/SearchUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route exact path="/" element={<Home />} />

            <Route path="/users" element={<Users />} />
            <Route path="/users/user/:username" element={<UserProfile />} />
            <Route path="/search" element={<SearchUser />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Profile from "./Profile";
import Board from "./Board";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="profile">프로필</a>
          </li>
          <li>
            <a href="board">게시판</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/profile" component={Profile} />
        <Route path="/board" component={Board} />
      </Routes>
    </div>
  );
}

export default App;

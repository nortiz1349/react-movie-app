import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkToHome = styled.div`
  .home {
    padding: 20px 0px 0px 33px;

    text-decoration: none;
  }
  .home a {
    font-size: 35px;
    font-weight: 500;
    text-decoration: none;
    color: black;
  }
`;

function Nav() {
  return (
    <>
      <LinkToHome>
        <div className="home">
          <Link to={`/react-movie-app`}>Home</Link>
        </div>
      </LinkToHome>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/react-movie-app" element={<Home />} />
        <Route path="/react-movie-app/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

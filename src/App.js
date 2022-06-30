import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkToHome = styled.div`
  .home {
    font-size: 30px;
    padding: 30px 60px 30px 60px;
    font-weight: lighter;
    text-decoration: none;
  }
  .home a {
    text-decoration: none;
  }
`;

function Nav() {
  return (
    <>
      <LinkToHome>
        <div className="home">
          <Link to={`/`}>Home</Link>
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
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

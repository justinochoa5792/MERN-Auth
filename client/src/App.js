import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
    </div>
  );
}

export default App;

import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Container className="my-2">
        <Outlet />
      </Container>
    </div>
  );
}

export default App;

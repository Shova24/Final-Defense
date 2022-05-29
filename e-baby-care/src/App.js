import "./App.css";
import Intro from "./Pages/HomePage/Intro/Intro";
import Navbar from "./Pages/HomePage/Navbar/Navbar";
import Offer from "./Pages/HomePage/Offer/Offer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro />
      <Offer />
    </div>
  );
}

export default App;

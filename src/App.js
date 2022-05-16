import "./App.css";
import Banner from "./Pages/Home/Banner";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12 bg-white">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;

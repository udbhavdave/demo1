// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar subject="TextUtils" />
      {/* <Navbar/> */}
      {/* <div className="container"><TextForm heading="util" /></div> */}
      <About />
      </>
  );
}

export default App;

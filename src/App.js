import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Pricing from "./Components/Pricing/Pricing";
import AsasignmentMarks from "./Components/AssignmentMarks/AsasignmentMarks";
import Phonebar from "./Components/Phonebar/Phonebar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-5xl font-bold">This is my big big heading</h1>
      <p className="text-3xl">This is my big big paragraph</p>
      <Pricing></Pricing>
      <AsasignmentMarks></AsasignmentMarks>
      <Phonebar></Phonebar>
    </div>
  );
}

export default App;

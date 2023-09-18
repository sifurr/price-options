import "./App.css";
import LineChart from "./LineChart/LineChart";
import NavBar from "./NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;

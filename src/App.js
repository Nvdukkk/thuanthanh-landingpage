import Advise from "./components/Advise/Advise";
import Benefit from "./components/Benefit/Benefit";
import Contact from "./components/Contact/Contact";
import Guest from "./components/Guest/Guest";
import Header from "./components/Header/Header";
import Introduce from "./components/Introduce/Introduce";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduce />
      <Service />
      <Benefit />
      <Advise />
      <Guest />
      <Contact />
    </div>
  );
}

export default App;

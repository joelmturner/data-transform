import { getCityAverages } from "./getCityAverages";
import { cityData } from "./fixtureData";

function App() {
  return (
    <div className="App">
      <pre>{JSON.stringify(getCityAverages(cityData), null, 2)}</pre>
    </div>
  );
}

export default App;

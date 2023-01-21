import { getCityAverages } from "./getCityAverages-final";
import { cityData } from "./fixtureData";

function App() {
    return (
        <div className="App">
            <pre>{JSON.stringify(getCityAverages(cityData), null, 2)}</pre>
        </div>
    );
}

export default App;

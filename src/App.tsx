import * as React from "react";
import { getCityAverages } from "./getCityAverages";
import { cityData } from "./fixtureData";

const values = getCityAverages(cityData);

export function App() {
  return (
    <code>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </code>
  );
}

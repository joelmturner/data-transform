type CityData = {
    city: string;
    date: string;
    temperature: number;
    happinessIndex: number;
};

type KeyByCity = {
    [key: string]: {
        temperature: number[];
        happinessIndex: number[];
    };
};

type CityAverages = Pick<CityData, "city" | "temperature" | "happinessIndex">;

function keyByCity(dataToConvert: CityData[]): KeyByCity {
    return dataToConvert.reduce((converted, { city, temperature, happinessIndex }) => {
        if (!converted[city]) {
            converted[city] = {
                temperature: [],
                happinessIndex: [],
            };
        }

        converted[city].temperature.push(temperature);
        converted[city].happinessIndex.push(happinessIndex);

        return converted;
    }, {} as KeyByCity);
}

function average(numberSet: number[]): number {
    return Number((numberSet.reduce((a, b) => a + b, 0) / numberSet.length).toFixed(1));
}

function averageMetricLists(cityData: KeyByCity): CityAverages[] {
    return Object.entries(cityData).map(([city, { temperature, happinessIndex }]) => {
        return {
            city,
            temperature: average(temperature),
            happinessIndex: average(happinessIndex),
        };
    });
}

export function getCityAverages(dataToConvert: CityData[]): CityAverages[] {
    // combine the city data
    const cityObjects = keyByCity(dataToConvert);

    // average the metrics

    return averageMetricLists(cityObjects);
}

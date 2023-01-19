type CityData = {
    city: string;
    date: string;
    temperature: number;
    happinessIndex: number;
};

type CityAverages = {
    city: string;
    temperature: number;
    happinessIndex: number;
};

type ReductionData = {
    [key: string]: {
        temperature: number[];
        happinessIndex: number[];
    };
};

function average(numberSet: number[]): number {
    return Number((numberSet.reduce((a, b) => a + b, 0) / numberSet.length).toFixed(1));
}

function keyByCity(dataToConvert: CityData[]): ReductionData {
    return dataToConvert.reduce((converted, { city, temperature, happinessIndex }) => {
        if (!converted[city]) {
            converted[city] = { temperature: [], happinessIndex: [] };
        }

        converted[city].temperature.push(temperature);
        converted[city].happinessIndex.push(happinessIndex);

        return converted;
    }, {} as ReductionData);
}

function averageMetricLists(cityData: ReductionData): CityAverages[] {
    return Object.entries(cityData).map(([city, { temperature, happinessIndex }]) => {
        return {
            city,
            temperature: average(temperature),
            happinessIndex: average(happinessIndex),
        };
    });
}

export function getCityAverages(dataToConvert: CityData[]): CityAverages[] {
    // combine city data
    const cityObjects = keyByCity(dataToConvert);

    // average the metrics
    const finalData = averageMetricLists(cityObjects);

    return finalData;
}

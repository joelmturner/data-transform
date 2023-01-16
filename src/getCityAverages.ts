import { CityData } from "./types";

type ChartDatum = {
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

// This function takes an array of numbers and returns the average of those numbers.
// It does this by adding all of the numbers together and dividing by the number of numbers
// in the array. The result is rounded to the nearest tenth.
function average(numberSet: number[]) {
    return Number((numberSet.reduce((a, b) => a + b, 0) / numberSet.length).toFixed(1));
}

// This function takes an array of objects as input and returns an object with the keys being the
// city names and the values being an object with keys being the temperature and happiness index
// and the values being arrays with the city's temperature and happiness index.
function combineData(dataToConvert: CityData[]): ReductionData {
    return dataToConvert.reduce((converted, { city, temperature, happinessIndex }) => {
        if (!converted[city]) {
            converted[city] = { temperature: [], happinessIndex: [] };
        }
        converted[city].temperature.push(temperature);
        converted[city].happinessIndex.push(happinessIndex);
        return converted;
    }, {} as ReductionData);
}

// This function takes a combined data object and returns an array of objects with the average
// temperature and happiness index for each city.
function convertData(combinedData: ReductionData): ChartDatum[] {
    return Object.entries(combinedData).map(([city, { temperature, happinessIndex }]) => {
        return {
            city,
            temperature: average(temperature),
            happinessIndex: average(happinessIndex),
        };
    });
}

// This function takes a list of city data objects and returns a list of chart datum objects.
// The function combines the data from multiple cities, converts the data, and returns it.
export function getCityAverages(dataToConvert: CityData[]): ChartDatum[] {
    const combinedData = combineData(dataToConvert);
    const convertedData = convertData(combinedData);
    return convertedData;
}

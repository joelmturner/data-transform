export type CityData = {
    city: string;
    date: string;
    temperature: number;
    happinessIndex: number;
}

// create dataset using CityData type with the following cities: Portland, Seattle, Juneau, Sacramento, and San Francisco
export const cityData: CityData[] = [
    { city: 'Portland', date: '2019-01-01', temperature: 32, happinessIndex: 5 },
    { city: 'Portland', date: '2019-01-02', temperature: 36, happinessIndex: 4 },
    { city: 'Portland', date: '2019-01-03', temperature: 28, happinessIndex: 3 },
    { city: 'Portland', date: '2019-01-04', temperature: 33, happinessIndex: 2 },
    { city: 'Portland', date: '2019-01-05', temperature: 31, happinessIndex: 1 },
    { city: 'Seattle', date: '2019-01-01', temperature: 5, happinessIndex: 5 },
    { city: 'Seattle', date: '2019-01-02', temperature: 10, happinessIndex: 4 },
    { city: 'Seattle', date: '2019-01-03', temperature: 15, happinessIndex: 3 },
    { city: 'Seattle', date: '2019-01-04', temperature: 13, happinessIndex: 2 },
    { city: 'Seattle', date: '2019-01-05', temperature: 11, happinessIndex: 1 },
    { city: 'Juneau', date: '2019-01-01', temperature: -5, happinessIndex: 5 },
    { city: 'Juneau', date: '2019-01-02', temperature: -10, happinessIndex: 4 },
    { city: 'Juneau', date: '2019-01-03', temperature: -15, happinessIndex: 3 },
    { city: 'Juneau', date: '2019-01-04', temperature: -13, happinessIndex: 2 },
    { city: 'Juneau', date: '2019-01-05', temperature: -11, happinessIndex: 1 },
    { city: 'Sacramento', date: '2019-01-01', temperature: 75, happinessIndex: 5 },
    { city: 'Sacramento', date: '2019-01-02', temperature: 80, happinessIndex: 4 },
    { city: 'Sacramento', date: '2019-01-03', temperature: 85, happinessIndex: 3 },
    { city: 'Sacramento', date: '2019-01-04', temperature: 83, happinessIndex: 2 },
    { city: 'Sacramento', date: '2019-01-05', temperature: 81, happinessIndex: 1 },
    { city: 'San Francisco', date: '2019-01-01', temperature: 60, happinessIndex: 5 },
    { city: 'San Francisco', date: '2019-01-02', temperature: 65, happinessIndex: 4 },
    { city: 'San Francisco', date: '2019-01-03', temperature: 70, happinessIndex: 3 },
    { city: 'San Francisco', date: '2019-01-04', temperature: 68, happinessIndex: 2 },
    { city: 'San Francisco', date: '2019-01-05', temperature: 66, happinessIndex: 1 },
];


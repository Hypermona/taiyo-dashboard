/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICountriesMap } from "@/components/WorldMap";
import apiService from "./apiService";

export interface IHistoricalData {
  day: string;
  cases: string;
  recovered: string;
  deaths: string;
}

const processHistoricalData = (data: any): IHistoricalData[] => {
  const res = [];
  for (const [key, value] of Object.entries(data.cases)) {
    res.push({
      day: key as string,
      cases: value as string,
      recovered: data.recovered[key] as string,
      deaths: data.deaths[key] as string,
    });
  }
  return res;
};

const processCountryData = (countryData: any): ICountriesMap[] => {
  return countryData.map((country: any) => ({
    country: country.country,
    lat: country.countryInfo.lat,
    long: country.countryInfo.long,
    cases: country.cases,
    recovered: country.recovered,
    deaths: country.deaths,
  }));
};

class DiseaseDataService {
  fetchHistoricalData = async () => {
    const data = await apiService.get(import.meta.env.VITE_APP_HISTORICAL_DATA_API);
    return processHistoricalData(data);
  };
  fetchCountryWiseData = async () => {
    const data = await apiService.get(import.meta.env.VITE_APP_COUNTRYWISE_DATA_API);
    return processCountryData(data);
  };
}

export default new DiseaseDataService();

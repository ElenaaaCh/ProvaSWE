import { Test, TestingModule } from "@nestjs/testing";
import { WeatherApiFetcher } from "./weather-api-fetcher";
import { WEATHER_API_CONFIG } from "../config";
import { WeatherData } from "./weather-api-fetcher";
import axios from "axios";
import { Dataset } from "src/interfaces/dataset.interface";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("DataSourceService", () => {
  let fetcher: WeatherApiFetcher;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherApiFetcher],
    }).compile();

    fetcher = module.get<WeatherApiFetcher>(WeatherApiFetcher);
    mockedAxios.get = jest.fn();
  });

  it("should be defined", () => {
    expect(fetcher).toBeDefined();
  });

  it("should return the correct name", () => {
    const name = fetcher.getName();
    expect(name).toBe(WEATHER_API_CONFIG.NAME);
  });

  it("should return the correct size", () => {
    jest.mock("../config", () => ({
      WEATHER_API_CONFIG: {
        START_DATE: "2023-01-01",
        END_DATE: "2023-01-02",
        CITIES: [
          { id: 1, name: "City1", latitude: 0, longitude: 0 },
          { id: 2, name: "City2", latitude: 0, longitude: 0 },
        ],
      },
    }));
    const size = fetcher.getSize();
    const numberOfDays = 1;
    const expectedSize = [numberOfDays * 24, WEATHER_API_CONFIG.CITIES.length];
    expect(size).toEqual(expectedSize);
  });

  it("should return the correct description", () => {
    const description = fetcher.getDescription();
    expect(description).toBe(WEATHER_API_CONFIG.DESCRIPTION);
  });

  it("should fetch data and return transformed dataset", async () => {
    // Simuliamo la risposta API con dati fittizi
    const mockWeatherData: WeatherData[] = [
      {
        hourly: {
          time: ["2025-01-01T12:00:00", "2025-01-01T13:00:00"],
          temperature_2m: [20, 21],
        },
      },
      {
        hourly: {
          time: ["2025-01-01T12:00:00", "2025-01-01T13:00:00"],
          temperature_2m: [22, 23],
        },
      },
    ];

    // Simuliamo la risposta di Axios
    (mockedAxios.get as jest.Mock).mockResolvedValue({ data: mockWeatherData });

    // Chiamata al metodo pubblico fetchData()
    const result = await fetcher.fetchData();

    // Verifica che axios sia stato chiamato con qualche URL (non conosciamo il valore esatto)
    expect(mockedAxios.get).toHaveBeenCalled();

    // Verifica che il risultato sia stato trasformato (controllo generico)
    expect(result).toBeDefined();

    const expectedResult: Dataset = {
      data: [
        {
          id: 0,
          x: 0,
          y: 20,
          z: 0,
        },
        {
          id: 1,
          x: 1,
          y: 21,
          z: 0,
        },
        {
          id: 2,
          x: 0,
          y: 22,
          z: 1,
        },
        {
          id: 3,
          x: 1,
          y: 23,
          z: 1,
        },
      ],
      legend: {
        x: "Ore",
        y: "Temperatura (°C)",
        z: "Città",
      },
      xLabels: ["2025-01-01T12:00:00", "2025-01-01T13:00:00"],
      zLabels: ["Francoforte", "Parigi"],
    };
    expect(result).toEqual(expectedResult);
  });

  it("should throw an error if axios fails", async () => {
    jest.mock("axios");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    (mockedAxios.get as jest.Mock).mockRejectedValue(
      new Error("Network Error"),
    );

    await expect(fetcher.fetchData()).rejects.toThrow(
      "Errore nel recupero dei dati meteo:Error: Network Error",
    );
  });
});

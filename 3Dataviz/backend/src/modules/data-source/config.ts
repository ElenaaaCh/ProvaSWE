export const WEATHER_API_CONFIG = {
  NAME: "Temperatura oraria",
  BASE_URL: `https://archive-api.open-meteo.com/v1/archive?latitude=@latitude@&
  longitude=@longitude@&start_date=@start_date@&end_date=@end_date@&hourly=temp
  erature_2m`,
  START_DATE: "2025-01-01",
  END_DATE: "2025-03-31",
  CITIES: [
    {
      id: 0,
      name: "Francoforte",
      latitude: 50.02,
      longitude: 8.48,
    },
    {
      id: 1,
      name: "Parigi",
      latitude: 48.54,
      longitude: 2.27,
    },
    {
      id: 2,
      name: "Rome",
      latitude: 41.93,
      longitude: 12.56,
    },
    {
      id: 3,
      name: "Londra",
      latitude: 51.49,
      longitude: -0.16,
    },
  ],
  DESCRIPTION: `Dataset contenente la temperatura media oraria per alcune 
  grandi città europee, dal 01/01/2025 al 31/03/2024.`,
  LEGEND: {
    x: "Ore",
    y: "Temperatura (°C)",
    z: "Città",
  },
};

export const POPULATION_API_CONFIG = {
  NAME: "Popolazione per anno",
  BASE_URL: `https://api.worldbank.org/v2/country/@country_code@/indicator/SP.P
  OP.TOTL?date=@start_year@:@end_year@&format=json&per_page=10000`,
  START_YEAR: 1970,
  END_YEAR: 2023,
  COUNTRIES: [
    {
      id: 0,
      name: "Italia",
      countryCode: "ITA",
    },
    {
      id: 1,
      name: "Francia",
      countryCode: "FRA",
    },
    {
      id: 2,
      name: "Germania",
      countryCode: "DEU",
    },
    {
      id: 3,
      name: "Spagna",
      countryCode: "ESP",
    },
    {
      id: 4,
      name: "Regno Unito",
      countryCode: "GBR",
    },
    {
      id: 5,
      name: "Polonia",
      countryCode: "POL",
    },
    {
      id: 6,
      name: "Romania",
      countryCode: "ROU",
    },
    {
      id: 7,
      name: "Paesi Bassi",
      countryCode: "NLD",
    },
    {
      id: 8,
      name: "Belgio",
      countryCode: "BEL",
    },
    {
      id: 9,
      name: "Grecia",
      countryCode: "GRC",
    },
    {
      id: 10,
      name: "Portogallo",
      countryCode: "PRT",
    },
    {
      id: 11,
      name: "Russia",
      countryCode: "RUS",
    },
    {
      id: 12,
      name: "Australia",
      countryCode: "AUS",
    },
    {
      id: 13,
      name: "Austria",
      countryCode: "AUT",
    },
    {
      id: 14,
      name: "Norvegia",
      countryCode: "NOR",
    },
    {
      id: 15,
      name: "Svezia",
      countryCode: "SWE",
    },
    {
      id: 16,
      name: "Stati Uniti",
      countryCode: "USA",
    },
    {
      id: 17,
      name: "Irlanda",
      countryCode: "IRL",
    },
    {
      id: 18,
      name: "Islanda",
      countryCode: "ISL",
    },
    {
      id: 19,
      name: "Turchia",
      countryCode: "TUR",
    },
    {
      id: 20,
      name: "Cina",
      countryCode: "CHN",
    },
    {
      id: 21,
      name: "Giappone",
      countryCode: "JPN",
    },
    {
      id: 22,
      name: "Singapore",
      countryCode: "SGP",
    },
    {
      id: 23,
      name: "India",
      countryCode: "IND",
    },
    {
      id: 24,
      name: "Corea del Sud",
      countryCode: "KOR",
    },
    {
      id: 25,
      name: "Canada",
      countryCode: "CAN",
    },
  ],
  DESCRIPTION: `Dataset contenente la popolazione totale di alcuni paesi 
  dal 1970 al 2023.`,
  LEGEND: {
    x: "Anno",
    y: "Popolazione (milioni)",
    z: "Paese",
  },
};

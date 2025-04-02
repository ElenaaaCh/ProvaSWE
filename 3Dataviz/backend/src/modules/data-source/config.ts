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

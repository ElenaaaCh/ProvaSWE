import { Module } from "@nestjs/common";
import { DataVisualizationController } from "./controllers/data-visualization.controller";
import { DataVisualizationService } from "./services/data-visualization.service";
import { ConfigService } from "@nestjs/config";
import { CurrencyApiFetcher } from "../fetchers/services/currency-api-fetcher";
import { FlightsApiFetcher } from "../fetchers/services/flights-api-fetcher";
import { PopulationApiFetcher } from "../fetchers/services/population-api-fetcher";
import { WeatherApiFetcher } from "../fetchers/services/weather-api-fetcher";

@Module({
  controllers: [DataVisualizationController],
  providers: [
    DataVisualizationService,
    {
      provide: "FETCHERS",
      useFactory: (configService: ConfigService) => {
        return [
          new CurrencyApiFetcher(configService),
          new FlightsApiFetcher(),
          new PopulationApiFetcher(),
          new WeatherApiFetcher(),
        ];
      },
      inject: [ConfigService],
    },
  ],
})
export class DataVisualizationModule {}

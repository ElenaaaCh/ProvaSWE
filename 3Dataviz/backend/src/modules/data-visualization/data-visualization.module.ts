import { Module } from "@nestjs/common";
import { DataVisualizationController } from "./controllers/data-visualization.controller";
import { DataVisualizationService } from "./services/data-visualization.service";

@Module({
  controllers: [DataVisualizationController],
  providers: [DataVisualizationService],
})
export class DataVisualizationModule {}

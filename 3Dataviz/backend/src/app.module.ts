import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DataSourceModule } from "./modules/data-source/data-source.module";
import { DataVisualizationModule } from "./modules/data-visualization/data-visualization.module";
import { FetchersModule } from "./modules/fetchers/fetchers.module";

@Module({
  imports: [DataSourceModule, DataVisualizationModule, FetchersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DataSourceModule } from "./modules/data-source/data-source.module";
import { DataVisualizationModule } from "./modules/data-visualization/data-visualization.module";
import { FetchersModule } from "./modules/fetchers/fetchers.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    DataSourceModule,
    DataVisualizationModule,
    FetchersModule,
    ConfigModule.forRoot({
      isGlobal: true, //rende ConfigService disponibile ovunque
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Controller, Get, Query } from "@nestjs/common";
import { DataVisualizationService } from "../services/data-visualization.service";
import { DatasetDto } from "../dto/dataset.dto";

@Controller("data-visualization")
export class DataVisualizationController {
  constructor(private dataVisualizationService: DataVisualizationService) {}
  @Get()
  async getSources(@Query("id") id: number): Promise<DatasetDto> {
    return await this.dataVisualizationService.getDatasetById(id);
  }
}

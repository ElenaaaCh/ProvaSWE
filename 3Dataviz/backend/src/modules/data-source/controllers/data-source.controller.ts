import { Controller, Get } from "@nestjs/common";
import { DataSourceService } from "../services/data-source.service";

@Controller("data-source")
export class DataSourceController {
  constructor(private dataSourceService: DataSourceService) {}

  @Get()
  getSources() {
    return this.dataSourceService.getSources();
  }
}

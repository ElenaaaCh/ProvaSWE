import { Inject, Injectable } from "@nestjs/common";
import { Dataset } from "src/interfaces/dataset.interface";
import { BaseFetcher } from "src/modules/fetchers/services/base-fetcher";

@Injectable()
export class DataVisualizationService {
  constructor(@Inject("FETCHERS") private fetchers: BaseFetcher[]) {}

  async getDatasetById(id: number): Promise<Dataset> {
    return await this.fetchers[id].fetchData();
  }
}

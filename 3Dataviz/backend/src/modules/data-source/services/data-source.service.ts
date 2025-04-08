import { Inject, Injectable } from "@nestjs/common";
import { BaseFetcher } from "../../fetchers/services/base-fetcher";
import { DataSourceDto } from "../dto/data-source.dto";

@Injectable()
export class DataSourceService {
  constructor(@Inject("FETCHERS") private fetchers: BaseFetcher[]) {}
  getSources() {
    const sources: DataSourceDto[] = this.fetchers.map((fetcher, index) => ({
      id: index,
      name: fetcher.getName(),
      size: fetcher.getSize(),
      description: fetcher.getDescription(),
    }));
    return sources;
  }
}

import { Injectable } from "@nestjs/common";

@Injectable()
export class DataSourceService {
  getSources() {
    return [
      {
        id: 1,
        name: "Source 1",
        type: "CSV",
        description: "A CSV data source",
      },
      {
        id: 2,
        name: "Source 2",
        type: "JSON",
        description: "A JSON data source",
      },
    ];
  }
}

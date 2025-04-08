import { Test, TestingModule } from "@nestjs/testing";
import { DataVisualizationService } from "./data-visualization.service";
import { Dataset } from "../../../interfaces/dataset.interface";
import { BaseFetcher } from "../../../modules/fetchers/services/base-fetcher";
import { Legend } from "../../../interfaces/legend.interface";

// Creazione di una classe mock per BaseFetcher
class MockFetcher extends BaseFetcher {
  getName(): string {
    return "Mock Name";
  }

  getSize(): [number, number] {
    return [10, 5];
  }

  getDescription(): string {
    return "Mock Description";
  }

  fetchData(): Promise<Dataset> {
    return Promise.resolve({
      data: [],
      legend: {
        x: "",
        y: "",
        z: "",
      } as Legend,
      xLabels: [],
      zLabels: [],
    });
  }

  transformData(): Dataset {
    return {
      data: [],
      legend: {
        x: "",
        y: "",
        z: "",
      } as Legend,
      xLabels: [],
      zLabels: [],
    };
  }
}

describe("DataVisualizationService", () => {
  let service: DataVisualizationService;
  let mockFetcher1: MockFetcher;
  let mockFetcher2: MockFetcher;

  beforeEach(async () => {
    mockFetcher1 = new MockFetcher();
    mockFetcher2 = new MockFetcher();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DataVisualizationService,
        {
          provide: "FETCHERS",
          useValue: [mockFetcher1, mockFetcher2],
        },
      ],
    }).compile();

    service = module.get<DataVisualizationService>(DataVisualizationService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

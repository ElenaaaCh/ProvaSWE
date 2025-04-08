import { Test, TestingModule } from "@nestjs/testing";
import { DataVisualizationService } from "./data-visualization.service";
import { Dataset } from "../../../interfaces/dataset.interface";
import { BaseFetcher } from "../../../modules/fetchers/services/base-fetcher";

// Creazione di una classe mock per BaseFetcher
const mockDataset: Dataset = {
  data: [{ id: 0, x: 0, y: 0, z: 0 }],
  legend: { x: "X", y: "Y", z: "Z" },
  xLabels: ["Label 1"],
  zLabels: ["Label 1"],
};
class MockFetcher extends BaseFetcher {
  getName = jest.fn(() => "Mock Name");
  getSize = jest.fn(() => [10, 5] as [number, number]);
  getDescription = jest.fn(() => "Mock Description");

  fetchData = jest.fn(() => Promise.resolve(mockDataset));
  transformData = jest.fn(() => mockDataset);
}

describe("DataVisualizationService", () => {
  let service: DataVisualizationService;
  let mockFetcher0: MockFetcher;
  let mockFetcher1: MockFetcher;

  beforeEach(async () => {
    mockFetcher0 = new MockFetcher();
    mockFetcher1 = new MockFetcher();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DataVisualizationService,
        {
          provide: "FETCHERS",
          useValue: [mockFetcher0, mockFetcher1],
        },
      ],
    }).compile();

    service = module.get<DataVisualizationService>(DataVisualizationService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should fetch data from the correct fetcher", async () => {
    const dataset = await service.getDatasetById(0);
    expect(dataset).toBeDefined();
    expect(mockFetcher0.fetchData).toHaveBeenCalled();
  });

  it("should throw an error if fetcher is not found", async () => {
    await expect(service.getDatasetById(3)).rejects.toThrow(
      "Invalid fetcher ID",
    );
  });

  it("should return the correct dataset", async () => {
    const dataset = await service.getDatasetById(0);
    expect(dataset).toEqual(mockDataset);
  });
});

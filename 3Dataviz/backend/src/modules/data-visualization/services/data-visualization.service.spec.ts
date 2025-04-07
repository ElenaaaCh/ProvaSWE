import { Test, TestingModule } from "@nestjs/testing";
import { DataVisualizationService } from "./data-visualization.service";

describe("DataVisualizationService", () => {
  let service: DataVisualizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataVisualizationService],
    }).compile();

    service = module.get<DataVisualizationService>(DataVisualizationService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

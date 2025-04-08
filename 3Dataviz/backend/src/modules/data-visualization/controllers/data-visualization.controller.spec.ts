import { Test, TestingModule } from "@nestjs/testing";
import { DataVisualizationController } from "./data-visualization.controller";
import { DataVisualizationService } from "../services/data-visualization.service";

describe("DataVisualizationController", () => {
  let controller: DataVisualizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataVisualizationController],
      providers: [
        {
          provide: DataVisualizationService,
          useValue: {
            getSources: jest.fn().mockReturnValue([
              {
                id: 1,
                name: "Source 1",
                size: [100, 20],
                description: "A data source",
              },
            ]), // Mock del servizio
          },
        },
      ],
    }).compile();

    controller = module.get<DataVisualizationController>(
      DataVisualizationController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

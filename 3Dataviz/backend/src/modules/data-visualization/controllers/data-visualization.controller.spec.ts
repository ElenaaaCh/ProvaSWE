import { Test, TestingModule } from "@nestjs/testing";
import { DataVisualizationController } from "./data-visualization.controller";

describe("DataVisualizationController", () => {
  let controller: DataVisualizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataVisualizationController],
    }).compile();

    controller = module.get<DataVisualizationController>(
      DataVisualizationController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

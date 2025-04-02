export abstract class BaseFetcher {
  abstract getName(): string;
  abstract getSize(): [number, number];
  abstract getDescription(): string;
  abstract fetchData(url: string): Promise<any>;
  protected abstract transformData(data: any): any;
}

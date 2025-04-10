import { Data } from "./Data";
import { Legend } from "./Legend";

export interface DataState {
    data: Data[],
    legend: Legend | null,
    average: number,
    z: string[],
    x: string[]
}
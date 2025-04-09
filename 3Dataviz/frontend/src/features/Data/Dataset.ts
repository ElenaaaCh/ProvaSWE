import { Data } from "./Data"
import { Legend } from "./Legend"

export type Dataset = {
        data: Data[],
        legend: Legend | null,
        zLabels: string[],
        xLabels: string[]
}
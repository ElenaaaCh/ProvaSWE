import { Data } from "../interfaces/Data"
import { Legend } from "../interfaces/Legend"

type Entity = {
        id: number,
        y: number,
        x: number,
        z: number,    
}

export type Dataset = {
        data: Entity[],
        legend: Legend | null,
        zLabels: string[],
        xLabels: string[]
}
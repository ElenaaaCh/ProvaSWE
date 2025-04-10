import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataState } from "./interfaces/DataState";
import { RootState } from "../../app/Store";
import axios from "axios";
import { FilterPayload } from "./interfaces/FilterPayload";
import { Data } from "./interfaces/Data";
import { Dataset } from "./types/Dataset";

const initialState: DataState = {
        data: [],
        legend: null,
        average: 0,
        z: [],
        x: []
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        filterTopN: (state, action: PayloadAction<FilterPayload>) => {
            let sortedData: number[]; // array dei dati da filtrare
            if (action.payload.isGreater) { // top 
                sortedData = [...state.data].sort((a, b) => b.y - a.y).slice(0,action.payload.value).map(data=>data.id); // copia dell`array di dati per prendere gli N valori piu` alti
            } else {
                sortedData = [...state.data].sort((a, b) => a.y - b.y).slice(0,action.payload.value).map(data=>data.id); // copia dell`array di dati per prendere gli N valori piu` bassi
            }

            state.data.forEach(data => { // rendo invisibili i dati che non sono stati presi nella precedente operazione
                if (!sortedData.includes(data.id)) {
                    data.show = false;
                }
            });
        },
        filterAboveValue: (state, action: PayloadAction<FilterPayload>) => {
            if (action.payload.isGreater) {
                state.data.forEach(data => {
                    if (data.y < action.payload.value) {
                        data.show = false;
                    }
                });
            }
            if (!action.payload.isGreater) {
                state.data.forEach(data => {
                    if (data.y > action.payload.value) {
                        data.show = false;
                    }
                });
            }
        },
        filterAverage: (state, action: PayloadAction<boolean>) => {
            dataSlice.caseReducers.filterAboveValue(state,{payload: {value: state.average, isGreater: action.payload}, type: action.type })
        },
        reset: (state) => {
            state.data.forEach(data => data.show = true);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(requestData.fulfilled, (state,action) => {
            const data: Data[] = action.payload.data.map(data => ({
                id: data.id,
                show: true,
                y: data.y,
                x: data.x,
                z: data.z,
            }));

            state.data = data;
            state.average = state.data.reduce((a,b)=> a+ b.y,0) / state.data.length;
            state.legend = action.payload.legend;
            state.x = action.payload.xLabels;
            state.z = action.payload.zLabels;

        })
        .addCase(requestData.rejected, (state,action) => {
            //AppState error
        })
    }
});

export const requestData = createAsyncThunk(
    "data/requestData",
    async (datasetId: number) => {
        const response = await axios.get("http://127.0.0.1:5000/api/"+datasetId);
        return response.data as Dataset;
    }
)

export const {filterTopN,filterAboveValue,filterAverage,reset} = dataSlice.actions;

export const selectorData = (state: RootState) => state.data.data;
export const selectorAverage = (state: RootState) => state.data.average;
export const selectorLegend = (state: RootState) => state.data.legend;
export const selectorXLabels = (state: RootState) => state.data.x;
export const selectorZLabels = (state: RootState) => state.data.z;

export default dataSlice.reducer;
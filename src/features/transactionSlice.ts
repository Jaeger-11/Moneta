import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TransactionType } from "../interface";
import axios from "axios";

const initialState = {
    transactions: [] as TransactionType[],
    active: {
        id: "txn002",
      date: "2025-01-01T10:15:00",
      description: "Salary from AGB Limited",
      amount: 15850,
      type: "credit",
      category: "Income",
      status: "successful",
      details: {
        name: "AGB Limited",
        account: "AGB Limited Payroll - 12345****67"
      },
      transactionType: "Salary Payment",
      transactionNumber: "564738292847503",
      remark: "December 2024 Salary"
    } as TransactionType,
    totalTransactions: 0 as number,
    loading: false,
    error: null as string | null
}

export const getTransactions = createAsyncThunk('transactions/getTransactions', async (_, {rejectWithValue}) => {
    try {
        const response = await axios.get<TransactionType[]>("/data.json"); // Update URL to your endpoint
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload
            state.totalTransactions = action.payload.length
            
        },
        setActive: (state, action) => {
            const selected:TransactionType = state.transactions.find((item:TransactionType) => item.id === action.payload) || state.transactions[0]
            state.active = selected
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTransactions.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getTransactions.fulfilled, (state, action) => {
            state.loading = false;
            state.transactions = action.payload;
            state.totalTransactions = action.payload.length;
            state.active = action.payload[0]
        })
        .addCase(getTransactions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})


export const { setTransactions, setActive } = transactionSlice.actions;

export default transactionSlice.reducer;
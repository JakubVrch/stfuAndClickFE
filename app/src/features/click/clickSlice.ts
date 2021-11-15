import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ClickRequest, ClickResponse } from "services/API/types"
import { apiService } from "services/API/api.service"
import { fetchStatus } from "services/redux/fetchStatus"
import { v4 as uuidv4 } from 'uuid';
import { RootState } from "app/store"

interface ClickState {
  session: string
  status: fetchStatus,
  clickResponse?: ClickResponse
  error?: unknown //TODO I need to investigate possible error states of server (missing docs)
}

const initialState: ClickState = {
  session: uuidv4(),
  status: fetchStatus.LOADING
}

export const click = createAsyncThunk(
  'click/clickStatus',
  async (team: string, { getState }) => {
    //TODO Happy path only here
    const session = selectSession(getState() as RootState)
    const data = {
      team: team,
      session: session
    }
    console.log("test",getState());
    const response = await apiService.postClick(data)
    return response.data
  }
)

export const ClickSlice = createSlice({
  name: 'click',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(click.pending, (state) => {
        state.status = fetchStatus.LOADING
      })
      .addCase(click.fulfilled, (state, action) => {
        state.status = fetchStatus.IDLE
        state.clickResponse = action.payload
      })
      .addCase(click.rejected, (state, action) => {
        state.status = fetchStatus.ERROR
        state.error = action.error
      })
  },
})

export const selectSession = (state: RootState) => state.click.session

export default ClickSlice.reducer
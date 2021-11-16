import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ClickResponse } from "services/API/types";
import { apiService } from "services/API/apiService";
import { fetchStatus } from "services/redux/fetchStatus";
import { RootState } from "app/store";
import { fetchTeams } from "features/leaderboard/fetchTeamsSlice";

interface ClickState {
  session: string
  status: fetchStatus,
  clickResponse?: ClickResponse
  error?: unknown //TODO Could not investigate possible error states
}

const initialState: ClickState = {
  session: uuidv4(),
  status: fetchStatus.IDLE,
  clickResponse: {
    your_clicks: 0,
    team_clicks: null
  }
}

export const click = createAsyncThunk(
  'click/clickStatus',
  async (team: string, { getState, dispatch }) => {
    //TODO Happy path only here, could not investigate error states
    const session = selectSession(getState() as RootState)
    const data = {
      team: team,
      session: session
    }
    const response = await apiService.postClick(data)
    dispatch(fetchTeams());
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
export const selectStatus = (state: RootState) => state.click.status
export const selectClickInfo = (state: RootState) => state.click.clickResponse

export default ClickSlice.reducer
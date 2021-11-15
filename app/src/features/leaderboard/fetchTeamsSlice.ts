import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { TeamResponse,  } from "services/API/types"
import { apiService } from "services/API/api.service"
import { fetchStatus } from "services/redux/fetchStatus"

export const fetchTeams = createAsyncThunk(
  'teams/fetchTeamsStatus',
  async () => {
    //TODO Happy path only here
    const response = await apiService.getTeams()
    return response.data
  }
)

interface fetchTeamsState {
  status: fetchStatus,
  teams?: TeamResponse[]
  error?: unknown //TODO I need to investigate possible error states of server (missing docs)
}

const initialState: fetchTeamsState = {
  status: fetchStatus.LOADING
}

export const fetchTeamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = fetchStatus.LOADING
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = fetchStatus.IDLE
        state.teams = action.payload
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = fetchStatus.ERROR
        state.error = action.error
      })
  },
})


// Other code such as selectors can use the imported `RootState` type
/*export const selectCount = (state: RootState) => state.counter.value
*/
export default fetchTeamsSlice.reducer
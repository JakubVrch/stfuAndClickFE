import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import {compose, sortBy, prop, filter, gte, propEq} from 'ramda'
import { TeamResponse,  } from "services/API/types"
import { apiService } from "services/API/api.service"
import { fetchStatus } from "services/redux/fetchStatus"
import { RootState } from "app/store"

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

export const selectStatus = (state: RootState) => state.teams.status

export function selectTop10 (state: RootState) {
  if (state.teams.teams) {
    return compose(
      sortBy(prop("order")),
      filter<TeamResponse> (
        compose (
          gte(10),
          prop('order')
        )
      ),
    )(state.teams.teams)
  } else {
    return [];
  }

}


/**
 * Selects Teams that should display in leaderboard on Clicking page
 *
 * Functions tries to display desired team -+ 3 teams based on their order, when not possible it optimizes this value to display desired number of teams
 */
export const selectAroundTeam = (teamName: string) => function (state: RootState) {
  const positionsBeforeAfter = 3
  
  if (state.teams.teams) {
    const teamsSorted = sortBy(
      prop("order"),
      state.teams.teams
    );

    if (teamsSorted.length <= (positionsBeforeAfter * 2 + 1) ) {
      return teamsSorted;

    } else {
      const currentTeamPosition = teamsSorted.findIndex(propEq("team", teamName));
      
      if (currentTeamPosition != -1) {
        const minQueryOrder = currentTeamPosition - positionsBeforeAfter;

        if (minQueryOrder <= 0) {
          return teamsSorted.slice(0,(positionsBeforeAfter * 2 + 1))

        } else {
          const maxQueryOrder = currentTeamPosition + positionsBeforeAfter;

          if (maxQueryOrder > teamsSorted.length) {
            return teamsSorted.slice(teamsSorted.length - 2 * positionsBeforeAfter - 1);

          } else {
            return teamsSorted.slice(minQueryOrder,maxQueryOrder + 1);
          }
        }
      } else {
        return []
      }
    }
  } else {
    return []
  }
}


export default fetchTeamsSlice.reducer


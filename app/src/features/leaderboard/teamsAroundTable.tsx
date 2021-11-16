import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { fetchTeams, selectStatus, selectAroundTeam } from "features/leaderboard/fetchTeamsSlice";
import { fetchStatus } from "services/redux/fetchStatus";
import { TableHead, TableRowSimple, TableRowHighlighted, StyledTableHeading, StyledTable } from "./tableContainers";

export default function TeamsAroundTable({ teamName }: { teamName: string }) {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus);
  const teams = useAppSelector(selectAroundTeam(teamName));

  useEffect(() => {
    dispatch(fetchTeams());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status !== fetchStatus.ERROR) {
    return (
      <>
        <StyledTableHeading>Your competition:</StyledTableHeading>
        <StyledTable>
          <TableHead />
          <tbody>
            {teams.map(team => (
              (team.team === teamName) ?
                <TableRowHighlighted key={team.team} team={team} /> :
                <TableRowSimple key={team.team} team={team} />
            ))}
          </tbody>
        </StyledTable>
      </>
    )
  } else {
    return <div>ERROR</div>
  }
}
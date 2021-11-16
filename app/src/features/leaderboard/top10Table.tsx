import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { fetchTeams, selectStatus, selectTop10 } from "features/leaderboard/fetchTeamsSlice";
import { fetchStatus } from "services/redux/fetchStatus";
import { TableHead, TableRowSimple, StyledTable, StyledTableHeading } from "./tableContainers";

export default function Top10Table() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus);
  const teams = useAppSelector(selectTop10);

  useEffect(() => {
    dispatch(fetchTeams());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status !== fetchStatus.ERROR) {
    return (
      <>
        <StyledTableHeading>Click Kings!</StyledTableHeading>
          <StyledTable>
            <TableHead />
            <tbody>
                {teams.map(team => (
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
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchTeams, selectStatus, selectAroundTeam } from 'features/leaderboard/fetchTeamsSlice'
import { fetchStatus } from "services/redux/fetchStatus"
import { TableHead, TableRowSimple, TableRowHighlighted } from "./tableContainers"

export default function TeamsAroundTable ({ teamName }:{ teamName: string } ) {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTeams());
      }, []);
    
    const status = useAppSelector(selectStatus);
    const teams = useAppSelector(selectAroundTeam(teamName));
    
    if (status === fetchStatus.IDLE) {
        return (
            <table>
                <TableHead />
                <tbody>
                    {teams.map(team => (
                     (team.team === teamName) ? 
                        <TableRowHighlighted key={team.team} team={team} /> :
                        <TableRowSimple key={team.team} team={team} />
                    ))}
                </tbody>
            </table>
        )
    } else {
        return <div>Loading...</div>
    }
}
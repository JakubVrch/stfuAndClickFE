import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchTeams, selectStatus, selectTop10 } from 'features/leaderboard/fetchTeamsSlice'
import { fetchStatus } from "services/redux/fetchStatus"
import { TableHead, TableRowSimple } from "./tableContainers"

export default function Top10Table () {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTeams());
      }, []);
    
    const status = useAppSelector(selectStatus);
    const teams = useAppSelector(selectTop10);
    
    if (status === fetchStatus.IDLE) {
        return (
            <table>
                <TableHead />
                <tbody>
                    {teams.map(team => (
                        <TableRowSimple key={team.team} team={team} />
                    ))}
                </tbody>
            </table>
        )
    } else {
        return <div>Loading...</div>
    }
}
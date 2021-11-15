import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from 'app/hooks'
import { click } from 'features/click/clickSlice'

export function ClickForm () {
    const [teamName, setTeamName] = useState<string>("");
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            dispatch(click(teamName));
            navigate(`/${teamName}`);
        }}>
        <label>
          Name:
          <input type="text" value={teamName} onChange={e => setTeamName(e.target.value)} />
        </label>
        <input type="submit" value="Click" disabled={teamName.length <= 0} />
      </form>
    )
}
import { useParams } from "react-router-dom";
import ClickButton from "features/click/ClickButton"
import CopyUrl from "features/copyUrl";
import TeamsAroundTable from "features/leaderboard/teamsAroundTable"

export default function ClickPage () {
    let params = useParams();
    return (
        <>
            <CopyUrl/>
            { params.teamName && <>
                <ClickButton teamName = {params.teamName}/>
                <TeamsAroundTable teamName = {params.teamName} />
            </>}
        </>
    );
}
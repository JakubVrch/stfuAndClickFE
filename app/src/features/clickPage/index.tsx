import { useParams } from "react-router-dom";
import styled from '@emotion/styled';
import ClickButton from "features/click/ClickButton";
import CopyUrl from "features/copyUrl";
import TeamsAroundTable from "features/leaderboard/teamsAroundTable";
import ClickInfo from "features/click/ClickInfo";
import { mq, bp } from "services/styles/constants";

export default function ClickPage () {
    let params = useParams();

    return (
        <>
            { params.teamName && <>
                <ButtonGridItem><ClickButton teamName = {params.teamName}/></ButtonGridItem>
                <ClickInfoGridItem><ClickInfo /></ClickInfoGridItem>
                <ShareGridItem><CopyUrl/></ShareGridItem>
                <LeaderboardGridItem><TeamsAroundTable teamName = {params.teamName} /></LeaderboardGridItem>
            </>}
        </>
    );
}

const ButtonGridItem = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  ${mq(bp.M1)} {
    grid-area: 2 / 2 / 3 / 3;
  }
`
const ShareGridItem = styled.div`
  grid-area: 4 / 3 / 5 / 4 ;
  justify-self: center;
  text-align: center;
  ${mq(bp.M1)} {
    grid-area: 4 / 2 / 5 / 3 ;
  }
`
const LeaderboardGridItem = styled.div`
  grid-area: 5 / 3 / 6 / 4;
  justify-self: center;
  ${mq(bp.M1)} {
    grid-area: 5 / 2 / 6 / 3;
  }
`
const ClickInfoGridItem = styled.div`
  grid-area: 3 / 3 / 4 / 4;
  justify-self: center;
  ${mq(bp.M1)} {
    grid-area: 3 / 2 / 4 / 3;
  }
`
import styled from "@emotion/styled";
import ClickForm from "features/click/ClickForm";
import Top10Table from "features/leaderboard/top10Table";
import { mq, bp } from "services/styles/constants";

export default function RegisterPage () {
    return (
      <>
        <Title>STFU&Click</Title>
        <ButtonGridItem><ClickForm /></ButtonGridItem>
        <LeaderboardGridItem><Top10Table /></LeaderboardGridItem>
      </>
    )
}

const Title = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  font-family:'Bungee Outline',cursive;
  color:${(props: any) => props.theme.colors.primary};
  font-weight:600;
  text-shadow:0px 0px 9px ${(props: any) => props.theme.colors.primary};
  font-size: 7rem;
  line-height: 6rem;
  ${mq(bp.M1)} {
    grid-area: 2 / 1 / 3 / 4;
  }
  ${mq(bp.M2)} {
    font-size: 14vw;
    text-align: center;
    }
`
const ButtonGridItem = styled.div`
  grid-area: 3 / 3 / 4 / 4;
  justify-self: center;
  ${mq(bp.M1)} {
    grid-area: 3 / 2 / 4 / 3;
  }
`
const LeaderboardGridItem = styled.div`
  grid-area: 4 / 3 / 6 / 4;
  justify-self: center;
  ${mq(bp.M1)} {
    grid-area: 4 / 2 / 6 / 3;
  }
`
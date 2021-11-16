import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useAppSelector } from "app/hooks";
import { selectStatus, selectClickInfo } from "features/click/clickSlice";
import { fetchStatus } from "services/redux/fetchStatus";

export default function ClickInfo() {
  const status = useAppSelector(selectStatus);
  const clickInfo = useAppSelector(selectClickInfo);
  
  if (status !== fetchStatus.ERROR && clickInfo) {
    return (
      <>
        <StyledTable>
          <tbody>
            <tr>
              <td 
                className={css`
                  padding-right: 1rem;
                `}
              >
              Your Clicks</td>
              <td>Team Clicks</td>
            </tr>
            <tr>
              <td>{(clickInfo.your_clicks !== null) ? clickInfo.your_clicks.toString(): "?"}</td>
              <td>{(clickInfo.team_clicks !== null) ? clickInfo.team_clicks.toString(): "?"}</td>
            </tr>
          </tbody>
        </StyledTable>
      </>
    )
  } else {
    return <div>ERROR</div>
  }
}

export const StyledTable = styled.table`
  font-size: 2rem;
  text-align: center;
  text-shadow: 0px 0px 9px ${(props: any) => props.theme.colors.primary};
  padding-top: 0.5rem;
`
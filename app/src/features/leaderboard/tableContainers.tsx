import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { TeamResponse } from "services/API/types";

export const TableHead = () => (
  <thead>
    <tr>
      <th></th>
      <th 
        className={css`
          text-align: left
        `}
      >
        Team
      </th>
      <th 
        className={css`
          text-align: right;
        `}
      >
        Clicks
      </th>
    </tr>
  </thead>
)

const TableRowBase = ({ team }:{team: TeamResponse }) => (
  <>
    <td 
      className={css`
        text-align: right;
        padding: 0rem 1rem 0rem 0rem;
      `}
    >
      {team.order}
    </td>
    <td 
      className={css`
        min-width: 5rem;
        padding: 0rem 1rem 0rem 0rem;
      `}
    >
      {team.team}
    </td>
    <td 
      className={css`
        text-align: right;
        width: 5rem;
      `}
    >
      {team.clicks}
    </td>
  </>
)

export const TableRowSimple = ({ team }:{team: TeamResponse }) => (
  <tr>
    <TableRowBase team={ team }/>
  </tr>
)

export const TableRowHighlighted = ({ team }:{team: TeamResponse }) => (
  <HighlightedRow>
    <TableRowBase team={ team }/>
  </HighlightedRow>
)

export const HighlightedRow = styled.tr`
  font-weight: bold;
  border-style: solid;
  border-width: 2px 0 2px 0;
  border-color: ${(props: any) => props.theme.colors.primary};
`

export const StyledTable = styled.table`
  border-collapse: collapse;
`
export const StyledTableHeading = styled.div`
  font-size: 2rem;
  text-align: center;
  text-shadow: 0px 0px 9px ${(props: any) => props.theme.colors.primary};
  ::after {
    border: 2px solid ${(props: any) => props.theme.colors.primary};
    content: " ";
    width: 12rem;
    display: block;
    border-radius: 2px;
    background-color: ${(props: any) => props.theme.colors.primary};
    margin: 5px auto 7px auto;
    box-shadow: 0px 0px 9px ${(props: any) => props.theme.colors.primary};
  }
`

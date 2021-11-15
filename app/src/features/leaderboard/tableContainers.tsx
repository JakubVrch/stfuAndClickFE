import { TeamResponse } from "services/API/types"

export const TableHead = () => (
  <thead>
    <tr>
      <th></th>
      <th>Team</th>
      <th>Clicks</th>
    </tr>
  </thead>
)


export const TableRowSimple = ({ team }:{team: TeamResponse }) => (
  <tr>
    <td>{team.order}</td>
    <td>{team.team}</td>
    <td>{team.clicks}</td>
  </tr>
)

export const TableRowHighlighted = ({ team }:{team: TeamResponse }) => (
  <tr>
    <td><b>{team.order}</b></td>
    <td><b>{team.team}</b></td>
    <td><b>{team.clicks}</b></td>
  </tr>
)
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Chip,
} from "@mui/material";
import styled from "styled-components";

const StyledChip = styled(Chip)<{ status: string }>`
  background-color: ${(props) => {
    switch (props.status) {
      case "Done":
        return "#48bb78";
      case "In Progress":
        return "#f6ad55";
      case "Cancelled":
        return "#f56565";
      default:
        return "#a0aec0";
    }
  }}!important;

  color: white;
`;
const projectsData = [
  {
    name: "Project Aurora",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "Done",
    assignee: "James Dalton",
  },
  {
    name: "Project Aurora",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "In Progress",
    assignee: "James Dalton",
  },
  {
    name: "Project Aurora",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "Done",
    assignee: "James Dalton",
  },
  {
    name: "Project Aurora",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "Cancelled",
    assignee: "James Dalton",
  },
];
function Tables() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Start Date</TableCell>
          <TableCell>End Date</TableCell>
          <TableCell>State</TableCell>
          <TableCell>Assignee</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projectsData.map((project) => (
          <TableRow key={project.name}>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.startDate}</TableCell>
            <TableCell>{project.endDate}</TableCell>
            <TableCell>
              <StyledChip label={project.state} status={project.state} />
            </TableCell>
            <TableCell>{project.assignee}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default Tables;

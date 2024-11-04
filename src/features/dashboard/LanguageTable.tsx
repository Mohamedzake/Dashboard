import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
} from "@mui/material";

interface Language {
  name: string;
  users: number;
  percentage: number;
}

const languages: Language[] = [
  { name: "en-us", users: 865, percentage: 89.72 },
  { name: "en-gb", users: 240, percentage: 70.57 },
  { name: "fr-fr", users: 220, percentage: 60.17 },
  { name: "es-es", users: 162, percentage: 40.18 },
  { name: "de-de", users: 86, percentage: 30.93 },
  { name: "ru-ru", users: 32, percentage: 10.21 },
];

const LanguageTable = () => {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="Languages table">
        <TableHead>
          <TableRow>
            <TableCell>Language</TableCell>
            <TableCell>Users</TableCell>
            <TableCell>% Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {languages.map((language) => (
            <TableRow key={language.name}>
              <TableCell component="th" scope="row">
                {language.name}
              </TableCell>
              <TableCell>{language.users}</TableCell>
              <TableCell>
                <ProgressWrapper>
                  {/* <span>{language.percentage.toFixed(2)}%</span> */}
                  <StyledLinearProgress
                    variant="determinate"
                    value={language.percentage}
                  />
                </ProgressWrapper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

const StyledTable = styled(Table)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;

  thead {
    background-color: #f5f5f5;
  }

  th,
  td {
    padding: 12px 16px;
  }

  @media (max-width: 600px) {
    th,
    td {
      padding: 8px 12px;
    }
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledLinearProgress = styled(LinearProgress)`
  width: 70%;
  padding: 0.3rem;
`;

export default LanguageTable;

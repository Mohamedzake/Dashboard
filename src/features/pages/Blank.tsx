import styled from "styled-components";
import { Card, Typography, IconButton } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #555;
`;

const WelcomeText = styled.div`
  margin: 1rem 0;
  color: #4a5568;
`;

const ChartsGrid = styled.div`
  display: grid;

  margin-bottom: 17rem;
`;

const StyledCard = styled(Card)`
  padding: 0.7rem;
`;

const Span = styled.span`
  color: #1976d2;
`;
const P = styled.p`
  color: #4a5568;
  font-size: 13px;
`;
function Blank() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Blank</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Blank
          </WelcomeText>
        </div>
      </Header>

      <ChartsGrid>
        <StyledCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h6">
              Empty card
              <P>Empty card</P>
            </Typography>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </StyledCard>
      </ChartsGrid>
    </DashboardContainer>
  );
}

export default Blank;

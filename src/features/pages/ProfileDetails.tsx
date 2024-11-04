import React from "react";
import styled from "styled-components";
import { Box, Button, Typography, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";

interface Skill {
  name: string;
  color?: "primary" | "default" | "secondary";
}

interface ProfileDetailsProps {
  name: string;
  title: string;
  avatar: string;
  skills: Skill[];
  location: string;
  workplace: string;
  residence: string;
}

const ProfileCard = styled(Box)`
  /* background-color: #f5f5f5; */
  border-radius: 16px;
  /* padding: 24px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-bottom: 16px;
  border: 3px solid white;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled(Box)`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const SkillsGrid = styled(Box)`
  display: flex;
  justify-content: space-around;
  /* flex-direction: column; */
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 12px;
  padding: 0.4rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: ${(props) => props?.theme?.palette?.text.secondary};

  &:last-child {
    margin-bottom: 0;
  }
`;
const Div = styled.div`
  background-color: #fff;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.7rem 0;
  border: 1px solid #e3e0e0;
`;
const Div1 = styled.div`
  background-color: #fff;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.7rem 0;
  border: 1px solid #e3e0e0;
`;
const Div2 = styled.div`
  background-color: #fff;
  margin-bottom: 2rem;
  width: 85%;
  display: flex;
  flex-direction: column;

  /* align-items: center;
  text-align: center; */
  padding: 0.7rem 1.3rem;

  border: 1px solid #e3e0e0;
`;
const Span = styled.span`
  font-size: 0.8rem;
  color: green;
`;
const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  name,
  title,
  avatar,
  skills,
  location,
  workplace,
  residence,
}) => {
  return (
    <ProfileCard>
      <Div>
        <ProfileImage alt={name} src={avatar} />
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <ButtonGroup>
          <Button variant="contained">Follow</Button>
          <Button variant="outlined">Message</Button>
        </ButtonGroup>
      </Div>
      <Div1>
        <Box>
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <Chip key={index} label={skill.name} color={skill.color} />
            ))}
          </SkillsGrid>
        </Box>
      </Div1>
      <Div2>
        <Box>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <InfoItem>
            <HomeIcon />

            <Typography variant="body2">
              Lives in <Span>{location}</Span>
            </Typography>
          </InfoItem>
          <InfoItem>
            <BusinessIcon />
            <Typography variant="body2">
              Works at <Span>{workplace}</Span>
            </Typography>
          </InfoItem>
          <InfoItem>
            <LocationOnIcon />
            <Typography variant="body2">
              Lives in <Span>{residence}</Span>
            </Typography>
          </InfoItem>
        </Box>
      </Div2>
      <Div2>
        <Box>
          <Typography variant="h6" gutterBottom>
            Elsewhere
          </Typography>
          <InfoItem>
            <LocationOnIcon />
            <Typography variant="body2">
              <Span>lucylavender.io</Span>
            </Typography>
          </InfoItem>
          <InfoItem>
            <BusinessIcon />
            <Typography variant="body2">
              <Span>Facebook</Span>
            </Typography>
          </InfoItem>
          <InfoItem>
            <HomeIcon />
            <Typography variant="body2">
              <Span>Instagram</Span>
            </Typography>
          </InfoItem>
        </Box>
      </Div2>
    </ProfileCard>
  );
};

export default ProfileDetails;

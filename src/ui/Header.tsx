import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Badge from "@mui/material/Badge";
// import LanguageIcon from "@mui/icons-material/Language";

const StyledHeader = styled.header`
  background-color: #fff;
  /* background-color: #233043; */
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 3rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.2);
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const NotificationBadge = styled.div`
  position: relative;

  &::after {
    content: "7";
    position: absolute;
    top: -5px;
    right: -9px;
    background-color: #1976d2;
    color: white;
    font-size: 0.75rem;
    padding: 0.125rem 0.375rem;
    border-radius: 9999px;
    font-weight: 500;
  }
`;

const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

interface HeaderProps {
  onSearch?: (query: string) => void;
  notificationCount?: number;
  profileImageUrl?: string;
}

function Header({
  onSearch,
  // notificationCount = 3,
  profileImageUrl = "/api/placeholder/32/32",
}: HeaderProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(event.target.value);
  };
  const FlageImageUrl = "../../public/EG_Flag.jpg";
  return (
    <StyledHeader>
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon style={{ fontSize: "20px" }} />
        </SearchIconWrapper>
        <SearchInput
          type="text"
          placeholder="Search topics..."
          onChange={handleSearchChange}
        />
      </SearchContainer>

      <IconsContainer>
        <IconButton>
          <Badge badgeContent={3} color="primary">
            <ChatBubbleOutlineIcon color="action" />
          </Badge>
        </IconButton>
        <IconButton>
          <NotificationBadge>
            <NotificationsOutlinedIcon style={{ fontSize: "24px" }} />
          </NotificationBadge>
        </IconButton>

        {/* <IconButton>
          <LanguageIcon style={{ fontSize: "24px" }} />
        </IconButton> */}
        <IconButton>
          <img
            src={FlageImageUrl}
            alt="Language Flag"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "4px",
              borderRadius: "100%",
            }}
          />
        </IconButton>
        <IconButton>
          <ProfileAvatar src={profileImageUrl} alt="Profile" />
        </IconButton>
      </IconsContainer>
    </StyledHeader>
  );
}

export default Header;
/////////////////////////////

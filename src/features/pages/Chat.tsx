import styled from "styled-components";
import { Typography, IconButton, Button } from "@mui/material";
import {
  Refresh as RefreshIcon,
  ViewList as ViewListIcon,
} from "@mui/icons-material";

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

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const WelcomeText = styled.div`
  margin: 1rem 0;
  color: #4a5568;
`;

const Span = styled.span`
  color: #1976d2;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: #fff;
  /* padding: 1rem; */
`;
const Div2 = styled.div`
  border-right: 1px solid #e0e0e0;
`;
function Chat() {
  const messages1 = [
    {
      avatar: "/public/avatar.jpg",
      name: "Remy Sharp",
      message:
        "Sit meis deleniti eu, pri vidit meliorc docendi ut, an eum erat animal commodo.",
      timestamp: "20 minutes ago",
      isOutgoing: false,
      shortMessage: "Sent a photo",
    },
    {
      avatar: "/public/avatar.jpg",
      name: "You",
      message:
        "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodeset te vix.",
      timestamp: "12 minutes ago",
      isOutgoing: true,
      shortMessage: "Coffee",
    },
    {
      avatar: "/public/avatar.jpg",
      name: "Remy Sharp",
      message: "Cum ea graeci tractatos. 😀",
      timestamp: "8 minutes ago",
      isOutgoing: false,
      shortMessage: "Hello!😀",
    },
  ];
  const messages = [
    {
      avatar: "/public/avatar.jpg",
      name: "Remy Sharp",
      message:
        "Sit meis deleniti eu, pri vidit meliorc docendi ut, an eum erat animal commodo.",
      timestamp: "20 minutes ago",
      isOutgoing: false,
      shortMessage: "Sent a photo",
    },
    {
      avatar: "/public/avatar.jpg",
      name: "You",
      message:
        "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodeset te vix.",
      timestamp: "12 minutes ago",
      isOutgoing: true,
      shortMessage: "Coffee",
    },
    {
      avatar: "/public/avatar.jpg",
      name: "Remy Sharp",
      message: "Cum ea graeci tractatos. 😀",
      timestamp: "8 minutes ago",
      isOutgoing: false,
      shortMessage: "Hello!😀",
    },
    {
      avatar: "/public/avatar.jpg",
      name: "Remy Sharp",
      message:
        "Sit meis deleniti eu, pri vidit meliorc docendi ut, an eum erat animal commodo.",
      timestamp: "20 minutes ago",
      isOutgoing: false,
      shortMessage: "Sent a photo",
    },
    {
      avatar: "/public/avatar.jpg",
      name: "You",
      message:
        "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodeset te vix.",
      timestamp: "12 minutes ago",
      isOutgoing: true,
      shortMessage: "Coffee",
    },
    {
      avatar: "/public/avatar.jpg",
      name: "Remy Sharp",
      message: "Cum ea graeci tractatos. 😀",
      timestamp: "8 minutes ago",
      isOutgoing: false,
      shortMessage: "Hello!😀",
    },
  ];
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Chat</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Chat
          </WelcomeText>
        </div>
        <HeaderActions>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <ViewListIcon />
          </IconButton>
          <Button variant="contained">Today: April 29</Button>
        </HeaderActions>
      </Header>
      <Box>
        <Div>
          <Div2>
            <SearchContacts />
            {messages1.map((message, index) => (
              <MessageItem2
                key={index}
                avatar={message.avatar}
                name={message.name}
                shortMessage={message.shortMessage}
                message={""}
                timestamp={""}
                isOutgoing={false}
              />
            ))}
          </Div2>
          <div>
            <DivH>
              {messages.map((message, index) => (
                <MessageItem
                  key={index}
                  avatar={message.avatar}
                  name={message.name}
                  message={message.message}
                  timestamp={message.timestamp}
                  isOutgoing={message.isOutgoing}
                  shortMessage={""}
                />
              ))}
            </DivH>
            <MessageInput />
          </div>
        </Div>
      </Box>
    </DashboardContainer>
  );
}

export default Chat;
/////////////////////////////
import React, { useState } from "react";
import { Box, TextField, InputAdornment, Icon, Avatar } from "@mui/material";
import { Search, Send } from "@mui/icons-material";
const StyledSearchBox = styled(Box)`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`;
const SearchContacts: React.FC = () => {
  return (
    <StyledSearchBox>
      <TextField
        fullWidth
        placeholder="Search contacts"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon component={Search} />
            </InputAdornment>
          ),
        }}
      />
    </StyledSearchBox>
  );
};

interface MessageItemProps {
  shortMessage: string;
  avatar: string;
  name: string;
  message: string;
  timestamp: string;
  isOutgoing: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({
  avatar,
  name,
  message,
  timestamp,
  isOutgoing,
}) => {
  return (
    <StyledMessageItem isOutgoing={isOutgoing}>
      <Avatar alt={name} src={avatar} />
      <Box>
        <Typography variant="subtitle2">{name}</Typography>

        <StyledMessageContent isOutgoing={isOutgoing}>
          {message}
        </StyledMessageContent>

        <Typography variant="caption">{timestamp}</Typography>
      </Box>
    </StyledMessageItem>
  );
};
const MessageItem2: React.FC<MessageItemProps> = ({
  shortMessage,
  avatar,
  name,
}) => {
  console.log(shortMessage);
  return (
    <StyledMessageItem2>
      <Avatar alt={name} src={avatar} />
      <Box>
        <Div4>
          {/* <Typography variant="subtitle2">{name}</Typography> */}
          {name}

          <StyledShortMessageContent>{shortMessage}</StyledShortMessageContent>
        </Div4>
      </Box>
    </StyledMessageItem2>
  );
};
// MessageInput component
const MessageInput: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Implement the logic to send the message
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <StyledMessageInput>
      <TextField
        fullWidth
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button onClick={handleSendMessage}>
                <Icon component={Send} />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </StyledMessageInput>
  );
};

// Styled Components
const DivH = styled.div`
  overflow-y: auto;
  height: 50vh;
`;
const StyledMessageItem = styled(Box)<{ isOutgoing: boolean }>`
  /* background-color: aliceblue; */
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;
  justify-content: ${(props) => (props.isOutgoing ? "flex-end" : "flex-start")};
`;
const StyledMessageItem2 = styled(Box)`
  display: flex;
  align-items: center;

  gap: 16px;
  padding: 10px;
`;
const StyledMessageContent = styled(Typography)<{ isOutgoing: boolean }>`
  padding: 8px 16px;
  border-radius: ${(props) =>
    props.isOutgoing ? "16px 16px 0 16px" : "16px 16px 16px 0"};
  background-color: ${(props) => (props.isOutgoing ? "#dcf8c6" : "#f0f0f0")};
`;
const StyledShortMessageContent = styled.p`
  font-size: 14px;
  color: #555;
`;
const StyledMessageInput = styled(Box)`
  padding: 16px;
  border-top: 1px solid #e0e0e0;
`;
const Div4 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0;
`;

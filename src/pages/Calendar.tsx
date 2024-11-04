import {
  Refresh as RefreshIcon,
  ViewList as ViewListIcon,
} from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import styled from "styled-components";

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

function Calendar() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Calendar</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Calendar
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
      <Calendar1 />
    </DashboardContainer>
  );
}

export default Calendar;
// ////////////////////////////////////

// import React, { useState } from "react";

// import { Box } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const CalendarContainer = styled(Box)`
//   padding: 1rem;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const HeaderContainer = styled(Box)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 16px;
// `;

// const DayNameContainer = styled(Box)`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   text-align: center;
//   margin-bottom: 8px;
// `;

// const DayName = styled(Typography)`
//   font-weight: bold;
// `;

// const GridContainer = styled(Box)`
//   display: grid;
//   grid-template-columns: auto 1fr;
//   border-top: 1px solid rgba(0, 0, 0, 0.12);
// `;

// const DaysGrid = styled(Box)`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
// `;

// const DayCell = styled(Box)`
//   height: 120px;
//   border-right: 1px solid rgba(0, 0, 0, 0.12);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.12);
//   padding: 12px;
//   position: relative;
// `;

// const EventContainer = styled(Box)<{ eventType: string }>`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   cursor: pointer;
//   font-size: 14px;
//   padding: 4px 8px;
//   border-radius: 4px;
//   margin-bottom: 8px;
//   background-color: ${(props) => {
//     switch (props.eventType) {
//       case "birthday":
//         return "rgba(244, 67, 54, 0.1)";
//       case "conference":
//         return "rgba(76, 175, 80, 0.1)";
//       case "repeat":
//         return "rgba(33, 150, 243, 0.1)";
//       default:
//         return "rgba(158, 158, 158, 0.1)";
//     }
//   }};
//   color: ${(props) => {
//     switch (props.eventType) {
//       case "birthday":
//         return "rgb(244, 67, 54)";
//       case "conference":
//         return "rgb(76, 175, 80)";
//       case "repeat":
//         return "rgb(33, 150, 243)";
//       default:
//         return "rgb(158, 158, 158)";
//     }
//   }};
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// // const ArrowIndicators = styled(Box)`
// //   position: absolute;
// //   right: 8px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 4px;
// // `;

// interface CalendarEvent {
//   id: string;
//   title: string;
//   time: string;
//   type: "birthday" | "conference" | "repeat" | "other";
// }

// const EventBox: React.FC<{ event: CalendarEvent }> = ({ event }) => {
//   return (
//     <Box position="relative">
//       <EventContainer eventType={event.type}>
//         {event.time && <Typography variant="caption">{event.time}</Typography>}
//         <Typography variant="body2">{event.title}</Typography>
//       </EventContainer>
//       {/* <ArrowIndicators>
//         <ChevronLeft size={16} />
//         <ChevronRight size={16} />
//       </ArrowIndicators> */}
//     </Box>
//   );
// };

// const CalendarT: React.FC = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [viewMode, setViewMode] = useState<"day" | "week" | "month">("month");

//   const handlePrevMonth = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
//     );
//   };

//   const handleNextMonth = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
//     );
//   };

//   const handleViewModeChange = (mode: "day" | "week" | "month") => {
//     setViewMode(mode);
//   };

//   const eventsJanuary: { [key: number]: CalendarEvent[] } = {
//     1: [{ id: "1", title: "New Year's Day", time: "", type: "birthday" }],
//     7: [{ id: "2", title: "Company Retreat", time: "", type: "conference" }],
//     15: [{ id: "3", title: "John's Birthday", time: "9a", type: "birthday" }],
//     20: [{ id: "4", title: "Team Dinner", time: "7p", type: "other" }],
//     25: [{ id: "5", title: "Project Review", time: "2p", type: "conference" }],
//   };

//   const eventsFebruary: { [key: number]: CalendarEvent[] } = {};

//   const getDaysInMonth = (year: number, month: number): number => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const generateCalendarDays = (): number[] => {
//     const daysInMonth = getDaysInMonth(
//       currentDate.getFullYear(),
//       currentDate.getMonth()
//     );
//     const days = [];
//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push(i);
//     }
//     return days;
//   };

//   const calendarDays = generateCalendarDays();

//   return (
//     <CalendarContainer>
//       <HeaderContainer>
//         <Typography variant="h4" fontWeight="normal">
//           {currentDate.toLocaleString("default", { month: "long" })}{" "}
//           {currentDate.getFullYear()}
//         </Typography>
//         <Box display="flex" gap={2}>
//           <IconButton
//             color={viewMode === "day" ? "primary" : "default"}
//             onClick={() => handleViewModeChange("day")}
//           >
//             <Typography variant="body2">day</Typography>
//           </IconButton>
//           <IconButton
//             color={viewMode === "week" ? "primary" : "default"}
//             onClick={() => handleViewModeChange("week")}
//           >
//             <Typography variant="body2">week</Typography>
//           </IconButton>
//           <IconButton
//             color={viewMode === "month" ? "primary" : "default"}
//             onClick={() => handleViewModeChange("month")}
//           >
//             <Typography variant="body2">month</Typography>
//           </IconButton>
//           <IconButton onClick={handlePrevMonth}>
//             <ChevronLeft size={24} />
//           </IconButton>
//           <IconButton onClick={handleNextMonth}>
//             <ChevronRight size={24} />
//           </IconButton>
//         </Box>
//       </HeaderContainer>

//       <DayNameContainer>
//         <DayName>Sun</DayName>
//         <DayName>Mon</DayName>
//         <DayName>Tue</DayName>
//         <DayName>Wed</DayName>
//         <DayName>Thu</DayName>
//         <DayName>Fri</DayName>
//         <DayName>Sat</DayName>
//       </DayNameContainer>

//       <GridContainer>
//         <DaysGrid>
//           {calendarDays.map((day, index) => {
//             const dayEventsJanuary = eventsJanuary[day] || [];
//             const dayEventsFebruary = eventsFebruary[day] || [];

//             return (
//               <DayCell key={index}>
//                 <Typography variant="subtitle2" color="text.secondary">
//                   {day}
//                 </Typography>

//                 {dayEventsJanuary.map((event) => (
//                   <EventBox key={event.id} event={event} />
//                 ))}
//                 {dayEventsFebruary.map((event) => (
//                   <EventBox key={event.id} event={event} />
//                 ))}
//               </DayCell>
//             );
//           })}
//         </DaysGrid>
//       </GridContainer>
//     </CalendarContainer>
//   );
// };
import { useEffect } from "react";
import { Box } from "@mui/material";

const Calendar1: React.FC = () => {
  useEffect(() => {
    document.title = "Calendar | Mira";
  }, []);
  return (
    <>
      <Box
        sx={{
          width: "75vw",
          margin: "0 20px",
          padding: "10px",
        }}
      >
        <div style={{ margin: "20px" }}>
          <MyCalendar />
        </div>
      </Box>
    </>
  );
};

///////////////////////////////////
import { Calendar as Calendars, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: "All Day Event",
      allDay: true,
      start: new Date(2024, 9, 30),
      end: new Date(2024, 9, 30),
    },
    {
      title: "Long Event",
      start: new Date(2024, 9, 28),
      end: new Date(2024, 9, 30),
    },
    {
      title: "Conference",
      start: new Date(2024, 9, 29),
      end: new Date(2024, 9, 31),
    },
    {
      title: "Meeting",
      start: new Date(2024, 9, 31, 12, 30),
      end: new Date(2024, 9, 31, 13, 30),
    },
    {
      title: "Lunch",
      start: new Date(2024, 9, 31, 14, 0),
      end: new Date(2024, 9, 31, 15, 0),
    },
    {
      title: "Birthday Party",
      start: new Date(2024, 10, 1, 9, 0),
      end: new Date(2024, 10, 1, 10, 0),
    },
    {
      title: "Repeating Event",
      start: new Date(2024, 9, 26, 18, 0),
      end: new Date(2024, 9, 26, 19, 0),
      repeat: "weekly",
    },
  ];

  return (
    <Calendars
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultView="month"
      views={["month", "week", "day"]}
      style={{ height: 500 }}
    />
  );
};

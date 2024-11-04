import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Footer from "../features/dashboard/Footer";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 17rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Main = styled.main`
  background-color: rgb(248, 249, 253);
  padding: 1rem;
  overflow: scroll;
  scrollbar-width: none;
`;

function AppLayout() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };
  return (
    <StyledAppLayout>
      <Header onSearch={handleSearch} profileImageUrl="/avatar.jpg" />
      <Sidebar />

      <Main>
        <Outlet />
        <Footer />
      </Main>
    </StyledAppLayout>
  );
}
export default AppLayout;

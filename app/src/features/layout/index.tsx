import { Outlet } from "react-router-dom";
import { Global, css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme, mq, bp } from "services/styles/constants";

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Electrolize&display=swap');
        body {
          background-color:${theme.colors.background};
          color:${theme.colors.primary};
          font-family: 'Electrolize', sans-serif;
          font-size: 12pt
        }
        input {
          color:${theme.colors.primary};
          font: inherit;  
          font-size: 100%; 
        }
        button {
          color:${theme.colors.primary};
          font: inherit;  
          font-size: 100%; 
        }
      `} />
      <GridContainer>
        <Outlet />
      </GridContainer>
    </ThemeProvider>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 17rem 25rem 17rem auto;
  grid-template-rows: 5rem 8rem 8rem 6rem 24rem;
  gap: 5px 5px;
  ${mq(bp.M1)} {
    grid-template-columns: 1fr 25rem 1fr;
  }
`
import { Outlet } from "react-router-dom";
import { Global, css } from '@emotion/react';

export default function Layout() {
  return (
    <>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap');
        body {
          background-color: #1e1d1f
          color: #b363db
        }
      `} />
      <Outlet />
    </>
  )
}
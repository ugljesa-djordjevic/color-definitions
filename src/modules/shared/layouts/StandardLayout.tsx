import { Stack } from "@mui/material"
import { Header } from "../../core/components/Header"
import { Outlet } from "react-router-dom"

//todo Add ThemeProvider that will change the theme of the website by using the Color Palette selected

export const StandardLayout = () => {
  return (
    <Stack 
      style={{
          minHeight: "100vh",
      }}
    >
      
      <Header />

      <Stack sx={{ minHeight: "calc(100vh - 64px)"}}>

          <Outlet />

      </Stack>

    </Stack>
  )
}
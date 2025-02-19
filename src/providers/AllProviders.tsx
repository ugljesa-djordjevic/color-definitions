import { FC, PropsWithChildren } from "react"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../store/store"


export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
        <BrowserRouter>
            {children}
        </BrowserRouter>
    </ReduxProvider>
  )
}

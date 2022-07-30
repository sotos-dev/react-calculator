import "../styles/globals.scss"
import type { AppProps } from "next/app"
import ThemeContextProvider from "../context/ThemeContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp

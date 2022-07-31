import { Children, createContext, ReactNode, useContext, useState } from "react"

interface IThemeContextProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<any>(Children)
export const useTheme = () => {
  return useContext(ThemeContext)
}

const themes = {
  light: {
    bg: "#3a4664",
    keysBg: "#181F32",
    regularButtonsBg: "#E9E3DB",
    regularBtnsColor: "#181F32",
    regularButtonsBorderColor: "#B7A99F",
    delResetBgColor: "#627199",
    delResetColor: "#fff",
    delResetBorderColor: "#404E6F",
    calculateBgColor: "#D33C2C",
    calculateColor: "#fff",
    calculateBorderColor: "#9B251B",
    screenBgColor: "#181F32",
    screenColor: "#fff",
  },
  dark: {
    bg: "#E6E6E6",
    keysBg: "#D3CDCD",
    regularButtonsBg: "#E5E4E0",
    regularBtnsColor: "#181F32",
    regularButtonsBorderColor: "#A79E96",
    delResetBgColor: "#388187",
    delResetColor: "#fff",
    delResetBorderColor: "#1F666D",
    calculateBgColor: "#ff7088",
    calculateColor: "#fff",
    calculateBorderColor: "#d6556b",
    screenBgColor: "#fff",
    screenColor: "#181F32",
  },
  contrast: {
    bg: "#ADBECF",
    keysBg: "#F7C8C8",
    regularButtonsBg: "#F18080",
    regularBtnsColor: "#ffffff",
    regularButtonsBorderColor: "#d35252",
    delResetBgColor: "#9BC6D3",
    delResetColor: "#fff",
    delResetBorderColor: "#79adbd",
    calculateBgColor: "#ffe590",
    calculateColor: "#2f2f2f",
    calculateBorderColor: "#e8c67b",
    screenBgColor: "#F7C8C8",
    screenColor: "#62000d",
  },
}

const ThemeContextProvider = ({ children }: IThemeContextProviderProps) => {
  const [switcher, setSwitcher] = useState(0)
  let theme
  if (switcher === 0) {
    theme = themes.light
  } else if (switcher === 25) {
    theme = themes.dark
  } else if (switcher === 50) {
    theme = themes.contrast
  }
  const handleSwitch = () => {
    if (switcher === 50) {
      setSwitcher((prev) => (prev = 0))
    } else {
      setSwitcher((prev) => (prev += 25))
    }
  }

  const values = {
    theme,
    switcher,
    handleSwitch,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider

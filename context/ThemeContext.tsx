import { Children, createContext, ReactNode, useContext, useState } from "react"

interface IThemeContextProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<any>(Children)
export const useTheme = () => {
  return useContext(ThemeContext)
}

// interface IThemes {
//   lightTheme: {
//     titleColor: string
//     regularBgColor: string
//     regularColor: string
//     delResetBgColor: string
//     delResetColor: string
//     calculateBgColor: string
//     calculateColor: string
//     screenBgColor: string
//     screenColor: string
//   }
//   darkTheme: {
//     titleColor: string
//     regularBgColor: string
//     regularColor: string
//     delResetBgColor: string
//     delResetColor: string
//     calculateBgColor: string
//     calculateColor: string
//     screenBgColor: string
//     screenColor: string
//   }
// }
const themes = {
  light: {
    titleColor: "#fff",
    regularBgColor: "#fff",
    regularColor: "#627199",
    delResetBgColor: "#627199",
    delResetColor: "#fff",
    calculateBgColor: "#d13f30",
    calculateColor: "#fff",
    screenBgColor: "#181F32",
    screenColor: "#fff",
  },
  dark: {
    titleColor: "#fff",
    regularBgColor: "#627199",
    regularColor: "#fff",
    delResetBgColor: "#fff",
    delResetColor: "#627199",
    calculateBgColor: "#a13q16",
    calculateColor: "#fff",
    screenBgColor: "#fff",
    screenColor: "#181F32",
  },
  contrast: {
    titleColor: "#fff",
    regularBgColor: "#cd064c",
    regularColor: "#fff",
    delResetBgColor: "#19d529",
    delResetColor: "#1d2437",
    calculateBgColor: "blue",
    calculateColor: "#d0e60c",
    screenBgColor: "#fff",
    screenColor: "#181F32",
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

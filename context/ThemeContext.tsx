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
    keysBg: "#181F32",
    regularButtonsBg: "#E9E3DB",
    regularButtonsColor: "#181F32",
    regularButtonsBorderColor: "#B7A99F",
    delResetBgColor: "#627199",
    delResetColor: "#fff",
    calculateBgColor: "#D33C2C",
    calculateColor: "#fff",
    calculateBorderColor: "#9B251B",
    screenBgColor: "#181F32",
    screenColor: "#fff",
  },
  dark: {
    keysBg: "#D3CDCD",
    regularButtonsBg: "#E5E4E0",
    regularButtonsColor: "#181F32",
    regularButtonsBorderColor: "#A79E96",
    delResetBgColor: "#fff",
    delResetColor: "#627199",
    calculateBgColor: "#c7083e",
    calculateColor: "#fff",
    calculateBorderColor: "#a00b35",

    screenBgColor: "#fff",
    screenColor: "#181F32",
  },
  contrast: {
    keysBg: "#1B0930",
    regularButtonsBg: "#331B4D",
    regularButtonsColor: "#F8E34E",
    regularButtonsBorderColor: "#7B2391",
    delResetBgColor: "#19d529",
    delResetColor: "#1d2437",
    calculateBgColor: "#1dcad6",
    calculateColor: "#2f2f2f",
    calculateBorderColor: "#34f1e4",

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

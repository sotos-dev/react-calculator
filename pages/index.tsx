import styles from "../styles/Home.module.scss"
import React, { useState } from "react"
import KeysArea from "../components/keys"
import ScreenArea from "../components/screen"
import ThemeArea from "../components/theme"
import { useTheme } from "../context/ThemeContext"

const Homepage: React.FC = () => {
  const [total, setTotal] = useState<string>("0")
  const [currentValue, setCurrentValue] = useState<string[]>([])
  const [booleanChecker, setBooleanChecker] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const { theme } = useTheme()

  return (
    <>
      <section
        className={styles.homeWrapper}
        style={{ backgroundColor: theme.bg }}>
        <div className={styles.calcWrapper}>
          <ThemeArea />
          <ScreenArea total={total} currentValue={currentValue} />
          <KeysArea
            setTotal={setTotal}
            total={total}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            error={error}
            setError={setError}
            setErrorMessage={setErrorMessage}
            errorMessage={errorMessage}
            booleanChecker={booleanChecker}
            setBooleanChecker={setBooleanChecker}
          />
        </div>
      </section>
    </>
  )
}

export default Homepage

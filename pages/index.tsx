import styles from "../styles/Home.module.scss"
import React, { useState } from "react"
import KeysArea from "../components/keys"
import ScreenArea from "../components/screen"
import ThemeArea from "../components/theme"

const Homepage: React.FC = () => {
  const [total, setTotal] = useState<number>(0)
  const [currentValue, setCurrentValue] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  return (
    <>
      <section className={styles.homeWrapper}>
        <div className={styles.calcWrapper}>
          <ThemeArea />
          <ScreenArea total={total} currentValue={currentValue} />
          <KeysArea
            setTotal={setTotal}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            error={error}
            setError={setError}
            setErrorMessage={setErrorMessage}
            errorMessage={errorMessage}
          />
        </div>
      </section>
    </>
  )
}

export default Homepage

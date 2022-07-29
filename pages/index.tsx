import styles from "../styles/Home.module.scss"
import React, { useState } from "react"
import KeysArea from "../components/keys"
import ScreenArea from "../components/screen"

const Homepage: React.FC = () => {
  const [total, setTotal] = useState<number>(0)
  const [currentValue, setCurrentValue] = useState<string[]>([])

  return (
    <>
      <section className={styles.homeWrapper}>
        <div className={styles.calcWrapper}>
          <ScreenArea total={total} currentValue={currentValue} />
          <KeysArea
            total={total}
            setTotal={setTotal}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
          />
        </div>
      </section>
    </>
  )
}

export default Homepage

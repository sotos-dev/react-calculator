import styles from "../styles/Home.module.scss"
import React from "react"
import KeysArea from "../components/keys"
import ScreenArea from "../components/screen"

const Homepage: React.FC = () => {
  return (
    <>
      <section className={styles.homeWrapper}>
        <div className={styles.calcWrapper}>
          <ScreenArea />
          <KeysArea />
        </div>
      </section>
    </>
  )
}

export default Homepage

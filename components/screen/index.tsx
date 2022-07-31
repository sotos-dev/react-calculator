import React, { useEffect, useRef } from "react"
import { v4 as uuidv4 } from "uuid"
import { useTheme } from "../../context/ThemeContext"
import styles from "./index.module.scss"

export interface IScreenAreaProps {
  total: string
  currentValue: string[]
}

const ScreenArea = ({ total, currentValue }: IScreenAreaProps) => {
  const { theme } = useTheme()
  const cursor = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    setInterval(() => {
      cursor.current?.classList.toggle(styles["intervalize"])
    }, 850)
  }, [cursor])

  return (
    <>
      <div
        className={styles["screen-wrapper"]}
        style={{
          backgroundColor: theme.screenBgColor,
          color: theme.screenColor,
        }}>
        <div>
          Total: <span className={styles["total"]}>{total}</span>
        </div>
        <div className={styles["current-number-wrapper"]}>
          {currentValue &&
            currentValue.map((value) => {
              return <div key={uuidv4()}>{value}</div>
            })}
          {currentValue.length === 0 && (
            <p className={styles["waiting-cursor"]} ref={cursor}>
              |
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default ScreenArea

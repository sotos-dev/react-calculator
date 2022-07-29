import React from "react"
import { v4 as uuidv4 } from "uuid"
import styles from "./index.module.scss"

export interface IScreenAreaProps {
  total: number
  currentValue: string[]
}

const ScreenArea = ({ total, currentValue }: IScreenAreaProps) => {
  return (
    <>
      <div className={styles["screen-wrapper"]}>
        <div>{total}</div>
        <div>
          {currentValue &&
            currentValue.map((value) => {
              return <span key={uuidv4()}>{value}</span>
            })}
        </div>
        {currentValue.length === 0 && <p>0</p>}
      </div>
    </>
  )
}

export default ScreenArea

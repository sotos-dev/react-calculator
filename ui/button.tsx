import React from "react"
import styles from "./button.module.scss"

export interface IButtonProps {
  emmitEvent: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}
  value: string
}

const Button: React.FC<IButtonProps> = ({ emmitEvent, value }) => {
  return (
    <>
      <div className={styles.button} onClick={emmitEvent}>
        {value}
      </div>
    </>
  )
}

export default Button

import React from "react"
import styles from "./button.module.scss"

export interface IButtonProps {
  emmitEvent: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}
  stretch?: string
  color: string
  value: string
}

const Button: React.FC<IButtonProps> = ({
  emmitEvent,
  color,
  value,
  stretch = "",
}) => {
  return (
    <>
      <div
        className={`${styles.button} ${styles[color]} ${styles[stretch]}`}
        onClick={emmitEvent}>
        {value}
      </div>
    </>
  )
}

export default Button

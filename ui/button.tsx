import React from "react"
import { useTheme } from "../context/ThemeContext"
import styles from "./button.module.scss"

export interface IButtonProps {
  emmitEvent: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}
  value: string
}

const Button: React.FC<IButtonProps> = ({ emmitEvent, value }) => {
  const { theme } = useTheme()

  return (
    <>
      <div
        className={styles.button}
        onClick={emmitEvent}
        style={{
          color: theme.regularButtonsColor,
        }}>
        {value}
      </div>
    </>
  )
}

export default Button

import React from "react"
import styles from "./button.module.scss"
import { IKeysAreaProps as IButtonProps } from "../components/keys/index"

const Button: React.FC<IButtonProps> = ({
  division,
  multiplication,
  subtraction,
  addition,
  deletion,
  calculate,
  color,
  value,
  stretch,
}) => {
  return (
    <>
      <div className={`${styles.button} ${styles[color]} ${styles[stretch]}`}>
        {value}
      </div>
    </>
  )
}

export default Button

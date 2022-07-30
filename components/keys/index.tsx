import React, { Dispatch, SetStateAction, useState } from "react"
import styles from "./index.module.scss"
import Button from "../../ui/button"
import { useTheme } from "../../context/ThemeContext"

interface IKeysAreaProps {
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setCurrentValue: React.Dispatch<React.SetStateAction<string[]>>
  currentValue: string[]
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
  errorMessage: string
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const KeysArea = ({
  setTotal,
  setCurrentValue,
  currentValue,
  error,
  setError,
  errorMessage,
  setErrorMessage,
}: IKeysAreaProps) => {
  // Get number or operator and put it in an array, operators cannot be adjacent, if user
  // tries to enter an operator side by side, we pop the last one out and the latest
  const getValue = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    const value = e.target as HTMLElement

    if (
      currentValue[currentValue.length - 1] === "+" ||
      currentValue[currentValue.length - 1] === "-" ||
      currentValue[currentValue.length - 1] === "*" ||
      currentValue[currentValue.length - 1] === "/"
    ) {
      if (
        value.innerText === "+" ||
        value.innerText === "-" ||
        value.innerText === "*" ||
        value.innerText === "/"
      ) {
        currentValue.pop()
        setCurrentValue(currentValue)
      }
    }
    setCurrentValue((prev) => [...prev, value.innerText])
  }

  const deleteLastDigit = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): any => {
    const removeOne = [...currentValue]
    removeOne.splice(-1)
    setCurrentValue(removeOne)
  }

  const reset = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    setTotal(0)
    setCurrentValue([])
  }

  const calculate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    try {
      setTotal(eval(currentValue.join("")))
      setCurrentValue([])
    } catch (error) {
      setError(true)
      setErrorMessage(
        `Avoid using numbers like 01 or 010.
         *decimal numbers like 0.1 or 0.10 are okay to use`
      )
    }
  }

  const { theme } = useTheme()

  return (
    <>
      <section className={styles.keysGridWrapper}>
        <div className={styles.keysGrid}>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='7' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='8' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='9' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.delResetBgColor,
              color: theme.delResetColor,
            }}>
            <Button value='DEL' emmitEvent={deleteLastDigit} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='4' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='5' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='6' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='+' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='1' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='2' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='3' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='-' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='.' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='0' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='/' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{ backgroundColor: theme.regularBgColor }}>
            <Button value='*' emmitEvent={getValue} />
          </div>
          <div
            className={`${styles["button-wrapper"]} ${styles["stretch-reset"]}`}
            style={{
              backgroundColor: theme.delResetBgColor,
              color: theme.delResetColor,
            }}>
            <Button value='RESET' emmitEvent={reset} />
          </div>
          <div
            style={{
              backgroundColor: theme.calculateBgColor,
              color: theme.calculateColor,
            }}
            className={`${styles["button-wrapper"]} ${styles["stretch-equals"]}`}>
            <Button value='=' emmitEvent={calculate} />
          </div>
          <p className={styles["error-message"]}>{errorMessage}</p>
        </div>
      </section>
    </>
  )
}

export default KeysArea

import React, { Dispatch, SetStateAction, useState } from "react"
import styles from "./index.module.scss"
import Button from "../../ui/button"
import { useTheme } from "../../context/ThemeContext"

interface IKeysAreaProps {
  setTotal: React.Dispatch<React.SetStateAction<string>>
  total: string
  setCurrentValue: React.Dispatch<React.SetStateAction<string[]>>
  currentValue: string[]
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
  errorMessage: string
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  booleanChecker: boolean
  setBooleanChecker: React.Dispatch<React.SetStateAction<boolean>>
}

const KeysArea = ({
  setTotal,
  total,
  setCurrentValue,
  currentValue,
  error,
  setError,
  errorMessage,
  setErrorMessage,
  booleanChecker,
  setBooleanChecker,
}: IKeysAreaProps) => {
  // Get number or operator and put it in an array, operators cannot be adjacent, if user
  // tries to enter an operator side by side, we pop the last one out and the latest
  const getValue = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    const value = e.target as HTMLElement

    if (currentValue.length === 0) {
      if (
        value.innerText === "+" ||
        value.innerText === "-" ||
        value.innerText === "*" ||
        value.innerText === "/"
      ) {
        return
      }
    }

    // Remove adjacent operators, keep the last one clicked
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

    //
    if (booleanChecker === true) {
      console.log("run 1")
      if (
        value.innerText === "1" ||
        value.innerText === "2" ||
        value.innerText === "3" ||
        value.innerText === "4" ||
        value.innerText === "5" ||
        value.innerText === "6" ||
        value.innerText === "7" ||
        value.innerText === "8" ||
        value.innerText === "9" ||
        value.innerText === "."
      ) {
        console.log("run 2")

        setCurrentValue([value.innerText])
        setBooleanChecker(false)
      } else {
        console.log("run 3")
        setBooleanChecker(false)

        setCurrentValue((prev) => [...prev, value.innerText])
      }
    } else {
      console.log("run 4")

      setCurrentValue((prev) => [...prev, value.innerText])
    }
  }

  console.log(booleanChecker)

  const deleteLastDigit = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): any => {
    const removeOne = [...currentValue]
    removeOne.splice(-1)
    setCurrentValue(removeOne)
  }

  const reset = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    setTotal("0")
    setCurrentValue([])
  }

  const calculate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    try {
      const renewCurrentValue = []
      const stringResult = eval(currentValue.join(""))
      const numberResult = Math.round(+stringResult * 100) / 100
      renewCurrentValue.push(numberResult.toString())

      setTotal(eval(numberResult.toString()))
      setCurrentValue(renewCurrentValue)
      setBooleanChecker(true)
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
        <div
          className={styles.keysGrid}
          style={{ backgroundColor: theme.keysBg }}>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularButtonsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='7' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='8' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
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
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='4' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='5' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='6' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='+' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='1' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='2' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='3' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='-' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='.' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='0' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button value='/' emmitEvent={getValue} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
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
              borderBottom: `7px solid ${theme.calculateBorderColor}`,
            }}
            className={`${styles["button-wrapper"]} ${styles["stretch-equals"]}`}>
            <Button value='=' emmitEvent={calculate} />
          </div>
          {error && <p className={styles["error-message"]}>{errorMessage}</p>}
        </div>
      </section>
    </>
  )
}

export default KeysArea

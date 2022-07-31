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
      setError(false)
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
      currentValue[currentValue.length - 1] === "." ||
      currentValue[currentValue.length - 1] === "/"
    ) {
      if (
        value.innerText === "+" ||
        value.innerText === "-" ||
        value.innerText === "*" ||
        value.innerText === "." ||
        value.innerText === "/"
      ) {
        currentValue.pop()
        setCurrentValue(currentValue)
      }
    }

    //
    if (booleanChecker === true) {
      if (
        value.innerText === "0" ||
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
        setCurrentValue([value.innerText])
        setBooleanChecker(false)
      } else {
        setBooleanChecker(false)

        setCurrentValue((prev) => [...prev, value.innerText])
      }
    } else {
      setCurrentValue((prev) => [...prev, value.innerText])
    }
  }

  const getKeyValue = (e: React.KeyboardEvent<HTMLDivElement>): any => {
    const value = e.target as HTMLElement

    console.log(value)
  }
  // Deletes last entry
  const deleteLastDigit = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): any => {
    if (booleanChecker === true) {
      const removeOne = [...currentValue]
      const resetRemoveOne = Array.from(removeOne.toString().split(""))
      resetRemoveOne.splice(-1)
      setCurrentValue(resetRemoveOne)
      console.log("run1")
      setBooleanChecker(false)
    } else {
      const removeOne = [...currentValue]
      console.log("run2")
      removeOne.splice(-1)
      setCurrentValue(removeOne)
    }

    if (currentValue.length === 1) {
      setError(false)
    }
  }

  const reset = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    setTotal("0")
    setCurrentValue([])
    setError(false)
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
      setError(false)
    } catch (error) {
      setError(true)
      setErrorMessage(
        `Avoid using numbers like 01 or 010, or leaving operators as last values.
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
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='7'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='8'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='9'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.delResetBgColor,
              color: theme.delResetColor,
              borderBottom: `5px solid ${theme.delResetBorderColor}`,
            }}>
            <Button value='DEL' emmitEvent={deleteLastDigit} />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='4'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='5'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='6'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='+'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='1'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='2'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='3'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='-'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='.'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='0'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='/'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={styles["button-wrapper"]}
            style={{
              backgroundColor: theme.regularButtonsBg,
              color: theme.regularBtnsColor,
              borderBottom: `5px solid ${theme.regularButtonsBorderColor}`,
            }}>
            <Button
              value='*'
              emmitEvent={getValue}
              emmitKeyEvent={getKeyValue}
            />
          </div>
          <div
            className={`${styles["button-wrapper"]} ${styles["stretch-reset"]}`}
            style={{
              backgroundColor: theme.delResetBgColor,
              color: theme.delResetColor,
              borderBottom: `5px solid ${theme.delResetBorderColor}`,
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

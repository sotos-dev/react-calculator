import React, { Dispatch, SetStateAction, useState } from "react"
import styles from "./index.module.scss"
import Button from "../../ui/button"

interface IKeysAreaProps {
  setTotal: React.Dispatch<React.SetStateAction<number>>
  total: number
  setCurrentValue: React.Dispatch<React.SetStateAction<string[]>>
  currentValue: string[]
}

const KeysArea = ({
  setTotal,
  total,
  setCurrentValue,
  currentValue,
}: IKeysAreaProps) => {
  const getNumber = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
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
        const sequence: string[] = currentValue.slice(1, -1)
        sequence.push(value.innerText)
        setCurrentValue((prev) => [...prev, sequence.toString()])
      }
    }
    // setCurrentValue((prev) => [...prev, value.innerText])
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
    setTotal(eval(currentValue.join("")))
    setCurrentValue([])
  }

  return (
    <>
      <section className={styles.keysGridWrapper}>
        <div className={styles.keysGrid}>
          <Button color='white' value='7' emmitEvent={getNumber} />
          <Button color='white' value='8' emmitEvent={getNumber} />
          <Button color='white' value='9' emmitEvent={getNumber} />
          <Button color='blue' value='DEL' emmitEvent={deleteLastDigit} />
          <Button color='white' value='4' emmitEvent={getNumber} />
          <Button color='white' value='5' emmitEvent={getNumber} />
          <Button color='white' value='6' emmitEvent={getNumber} />
          <Button color='white' value='+' emmitEvent={getNumber} />
          <Button color='white' value='1' emmitEvent={getNumber} />
          <Button color='white' value='2' emmitEvent={getNumber} />
          <Button color='white' value='3' emmitEvent={getNumber} />
          <Button color='white' value='-' emmitEvent={getNumber} />
          <Button color='white' value='.' emmitEvent={getNumber} />
          <Button color='white' value='0' emmitEvent={getNumber} />
          <Button color='white' value='/' emmitEvent={getNumber} />
          <Button color='white' value='*' emmitEvent={getNumber} />
          <Button
            stretch='stretchReset'
            color='blue'
            value='RESET'
            emmitEvent={reset}
          />
          <Button
            stretch='stretchEquals'
            color='orange'
            value='='
            emmitEvent={calculate}
          />
        </div>
      </section>
    </>
  )
}

export default KeysArea

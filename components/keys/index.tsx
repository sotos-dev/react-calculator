import React, { useState } from "react"
import styles from "./index.module.scss"
import Button from "../../ui/button"

const KeysArea: React.FC = () => {
  const [currentNum, setCurrentNum] = useState<number>()
  const [arrayNums, setArrayNums] = useState<[]>()

  const getNumber = (e: { target: HTMLElement }): void => {
    setCurrentNum(parseInt(e.target.innerText))
  }

  const addition = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    return 0
  }
  const subtraction = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    return 0
  }
  const multiplication = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    return 0
  }
  const division = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    return 0
  }
  const deletion = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    return 0
  }
  const calculate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    return 0
  }

  return (
    <>
      <section className={styles.keysGridWrapper}>
        <div className={styles.keysGrid}>
          <Button color='white' value='7' emmitEvent={getNumber} />
          <Button color='white' value='8' emmitEvent={getNumber} />
          <Button color='white' value='9' emmitEvent={getNumber} />
          <Button color='blue' value='DEL' emmitEvent={deletion} />
          <Button color='white' value='4' emmitEvent={getNumber} />
          <Button color='white' value='5' emmitEvent={getNumber} />
          <Button color='white' value='6' emmitEvent={getNumber} />
          <Button color='white' value='+' emmitEvent={addition} />
          <Button color='white' value='1' emmitEvent={getNumber} />
          <Button color='white' value='2' emmitEvent={getNumber} />
          <Button color='white' value='3' emmitEvent={getNumber} />
          <Button color='white' value='-' emmitEvent={subtraction} />
          <Button color='white' value='.' emmitEvent={getNumber} />
          <Button color='white' value='0' emmitEvent={getNumber} />
          <Button color='white' value='/' emmitEvent={division} />
          <Button color='white' value='*' emmitEvent={multiplication} />
          <Button
            stretch='stretchReset'
            color='blue'
            value='RESET'
            emmitEvent={calculate}
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

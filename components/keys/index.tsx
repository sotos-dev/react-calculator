import React from "react"
import styles from "./index.module.scss"
import Button from "../../ui/button"

export interface IKeysAreaProps {
  reset: (e: any) => {}
  deletion: (e: any) => {}
  addition: (e: any) => {}
  subtraction: (e: any) => {}
  multiplication: (e: any) => {}
  division: (e: any) => {}
  getNumber: (e: any) => {}
  calculate: (e: any) => {}
  stretch: string
  color: string
  value: string
}

const KeysArea: React.FC<IKeysAreaProps> = () => {
  const addition = (): number => {
    return 0
  }
  const subtraction = (): number => {
    return 0
  }
  const multiplication = (): number => {
    return 0
  }
  const division = (): number => {
    return 0
  }

  const deletion = (): number => {
    return 0
  }

  const getNumber = (): number => {
    return 0
  }

  return (
    <>
      <section className={styles.keysGridWrapper}>
        <div className={styles.keysGrid}>
          <Button stretch='' color='white' value='7' getNumber={getNumber} />
          <Button stretch='' color='white' value='8' getNumber={getNumber} />
          <Button stretch='' color='white' value='9' getNumber={getNumber} />
          <Button stretch='' color='blue' value='DEL' deletion={deletion} />
          <Button stretch='' color='white' value='4' getNumber={getNumber} />
          <Button stretch='' color='white' value='5' getNumber={getNumber} />
          <Button stretch='' color='white' value='6' getNumber={getNumber} />
          <Button stretch='' color='white' value='+' addition={addition} />
          <Button stretch='' color='white' value='1' getNumber={getNumber} />
          <Button stretch='' color='white' value='2' getNumber={getNumber} />
          <Button stretch='' color='white' value='3' getNumber={getNumber} />
          <Button
            stretch=''
            color='white'
            value='-'
            subtraction={subtraction}
          />
          <Button stretch='' color='white' value='.' getNumber={getNumber} />
          <Button stretch='' color='white' value='0' getNumber={getNumber} />
          <Button stretch='' color='white' value='/' division={division} />
          <Button
            stretch=''
            color='white'
            value='*'
            multiplication={multiplication}
          />
          <Button
            stretch='stretchReset'
            color='blue'
            value='RESET'
            calculate={calculate}
          />
          <Button
            stretch='stretchEquals'
            color='orange'
            value='='
            calculate={calculate}
          />
        </div>
      </section>
    </>
  )
}

export default KeysArea

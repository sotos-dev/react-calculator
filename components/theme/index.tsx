import styles from "./index.module.scss"
import React, { Component, useState } from "react"
import Switch from "react-switch"
import { useTheme } from "../../context/ThemeContext"

export interface IThemeAreaProps {}

const ThemeArea = ({}: IThemeAreaProps) => {
  const { theme, handleSwitch, switcher } = useTheme()

  return (
    <>
      <div className={styles["theme-wrapper"]}>
        <h1 style={{ color: theme.titleColor }}>calc</h1>
        <div className={styles["switch-main-area"]}>
          <h2
            style={{ color: theme.titleColor }}
            className={styles["theme-title"]}>
            Theme
          </h2>
          <div className={styles["switch-area-wrapper"]}>
            <div
              style={{ color: theme.titleColor }}
              className={styles["switch-numbers"]}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className={styles["switch-wrapper"]} onClick={handleSwitch}>
              <div
                style={{
                  transform: `translateX(${switcher}px)`,
                  backgroundColor: theme.calculateBgColor,
                }}
                className={styles["switch"]}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThemeArea

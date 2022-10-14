import React from 'react'
import './myStyles.css'
import styles from './myStyles.module.css'

function StyleSheet(props) {
    let className = props.main ? "main" : ""
    const heading = {
        fontSize: "25px",
        color: "orange"
    }
  return (
    <div>
        <h1 className={`${className} font-xl`}>My StyleSheet</h1>
        <h2 className={styles.error}>This is a sub header</h2>
        <h3 style={heading}> This is a h3 tag</h3>
    </div>
  )
}

export default StyleSheet
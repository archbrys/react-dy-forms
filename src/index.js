// Imports: Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Imports: Styles
import styles from './styles.css'


const Input = ({input}) => (
  <div className={styles.inputGroup}>
    <label>{input.label}</label>
    <input type={input.type} placeholder={input.placeholder} defaultValue={input.defaultValue}/>
  </div>
)


const DyForms = (props) => {
  console.log(props.fields)
  // Return null if field is not an array
  if (!Array.isArray(props.fields)) return null;

  return (
    <form className={styles.formStyle}>
      {props.fields.map((input, i) => {
        return <Input key={`dy-${i}`} input={input}/>
      })}
    </form>
  )
}

DyForms.propTypes  = {
  fields : PropTypes.arrayOf(PropTypes.exact({
    label : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    defaultValue : PropTypes.string,
    type: PropTypes.string.isRequired,
    isRequired:  PropTypes.bool
  })).isRequired,
}

//Export 
export default DyForms;
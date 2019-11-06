// Imports: Dependencies
import React, { Component, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

//Imports: Styles
import styles from './styles.css'


const useForm = ({initialValue}) => {
  const [values, handleChange] = useState(initialValue);

  return [values, e => {
    console.log(e.target.value)
    handleChange({
      ...values,
      [e.target.name] : e.target.value
    })
  },
  v => {
    handleChange(v)
  }]
}

const Input = ({input, handleChange}) => (
  <div className={styles.inputGroup}>
    <label>{input.label}</label>
    <input onChange={handleChange} type={input.type} name={input.name} placeholder={input.placeholder} defaultValue={input.defaultValue} required={input.isRequired}/>
  </div>
)

const Select = ({input, handleChange}) => (
  <div className={styles.inputGroup}>
    <label>{input.label}</label>
    <select name={input.name} onChange={handleChange}>
      <option defaultValue>Select {input.name}</option>
      {input.options.map((option, i) => {
        return <option key={`option-${i}`} value={option.value}>{option.name}</option>
      })}
    </select>
  </div>
)

const Form = ({fields, initialValue, submitValues} = props) => {
  // Return null if field is not an array
  if (!Array.isArray(fields)) return null;
  const [values, handleChange, setValues] = useForm(initialValue);
  const formRef = useRef();

  // Monitor initialValue change and set as initialValue
  useEffect(() => {
    setValues(initialValue)
  }, [initialValue])


  const handleSubmit = (e) => {
    e.preventDefault();
    submitValues(values)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formStyle} ref={formRef}>
      {fields.map((input, i) => {
        if (input.type === "text" || input.type === "password") {
          return <Input key={`dy-${i}`} input={input} handleChange={handleChange}/>
        } else if (input.type === "select") {
          return <Select key={`dy-${i}`} input={input} handleChange={handleChange} />
        }
      })}
      <button type="submit">Submit</button>
    </form>
  )
}

export default class DyForms extends Component {

    state = {
      initialValue : {}
    };

    componentDidMount() {
      let initialValue = {}
      this.props.fields.forEach(element => {
        initialValue = {
          ...initialValue,
          [element.name] : element.defaultValue
        }
      });

      this.setState({
        initialValue : initialValue
      })
    };


    submitValues = (values) => {
      console.log(values)
    }

    render() {
      return(
        <Form 
          {...this.props} 
          initialValue={this.state.initialValue}
          submitValues={this.submitValues}
          />
      )
    }
}



DyForms.propTypes  = {
  fields : PropTypes.arrayOf(PropTypes.exact({
    name : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    defaultValue : PropTypes.string,
    type: PropTypes.string.isRequired,
    isRequired:  PropTypes.bool
  })).isRequired,
}

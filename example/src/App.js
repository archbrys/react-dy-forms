import React, { Component } from 'react'

import DyForms from 'react-dy-forms'

export default class App extends Component {
  render () {
    const fields = [
      {
        name : "firstname",
        label : "First Name",
        placeholder : "First Name",
        defaultValue : "",
        type: "text",
        isRequired: true
      },
      {
        name : "lastname",
        label : "Last Name",
        placeholder : "Last Name",
        defaultValue : "",
        type: "text",
        isRequired: true
      },
      {
        name : "password",
        label : "Password",
        placeholder : "",
        defaultValue : "",
        type: "password",
        isRequired: true
      },
      {
        name : "gender",
        label : "Gender",
        type: "select",
        options : [{
          value : "male",
          name : "Male"
        },
        {
          value : "female",
          name : "Female"
        }
      ]
      }
    ]
    return (
      <div style={{display: "block", margin: "0 auto", width: "40%"}}>
        <DyForms fields={fields} />
      </div>
    )
  }
}

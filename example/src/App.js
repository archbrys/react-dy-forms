import React, { Component } from 'react'

import DyForms from 'react-dy-forms'

export default class App extends Component {
  render () {
    const fields = [
      {
        name : "firstname",
        label : "First Name",
        placeholder : "",
        defaultValue : "test",
        type: "text",
        isRequired: true
      },
      {
        name : "lastname",
        label : "Last Name",
        placeholder : "lastname",
        defaultValue : "test",
        type: "text",
        isRequired: true
      }
    ]
    return (
      <div>
        <DyForms fields={fields} />
      </div>
    )
  }
}

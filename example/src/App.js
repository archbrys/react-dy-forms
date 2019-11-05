import React, { Component } from 'react'

import ExampleComponent from 'react-dy-forms'

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
        <ExampleComponent fields={fields} />
      </div>
    )
  }
}

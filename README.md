# react-dy-forms

A simple dynamic form that you can use for [React](https://reactjs.org/)

> 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NPM](https://img.shields.io/npm/v/react-dy-forms.svg)](https://www.npmjs.com/package/react-dy-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dy-forms
```

## Usage

```jsx
import React, { Component } from 'react'

import DyForms from 'react-dy-forms'

class Example extends Component {
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
      <DyForms fields={fields}/>
    )
  }
}
```

## License

MIT © [archbrys](https://github.com/archbrys)

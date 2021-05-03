import React, { Component } from 'react'
import Form from './Form'
import Header from './Header'

export default class FormContainer extends Component {
    render() {
        return (
            <div className="formContainer">
                <Header />
                <Form />
            </div>
        )
    }
}

import { BsFillExclamationCircleFill } from 'react-icons/bs'
import React from 'react'
import useForm from './useForm'
import validateUserInfo from './validateUserInfo'

const FormSignUp = () => {    
    const { handleChange, handleSubmit, values, errors } = useForm(validateUserInfo);   
    const {firstName, lastName, email, password} = errors;
    return (
        <div className="formBox">
            <form className="form">
                <div className="form-control">
                    <input 
                    type='text'
                    name='firstName'
                    className='form-input'
                    value={values.firstName}
                    onChange={handleChange}
                    placeholder= {!firstName && 'First Name'}
                    style={firstName && {border: 'solid 2px hsl(0, 100%, 74%)'}}
                    />
                    <small style={firstName && {visibility: 'visible'}}>{firstName}</small>
                    {firstName && <BsFillExclamationCircleFill className='bsIcon' /> }
                </div>                
                <div className="form-control">
                    <input 
                    type='text'
                    name='lastName'
                    className='form-input'
                    value={values.lastName}
                    onChange={handleChange}
                    placeholder= {!lastName && 'Last Name'}
                    style={lastName && {border: 'solid 2px hsl(0, 100%, 74%)'}}
                    />
                    <small style={firstName && {visibility: 'visible'}}>{lastName}</small>
                    {lastName && <BsFillExclamationCircleFill className='bsIcon' /> }
                </div>            
                <div className="form-control">
                    <input 
                    type='text'
                    name='email'
                    className='form-input'
                    value={values.email}
                    onChange={handleChange}
                    placeholder= {!email && 'Email Address'}
                    style={email && {border: 'solid 2px hsl(0, 100%, 74%)'}}
                    />
                    <small style={firstName && {visibility: 'visible'}}>{email}</small>
                    {email && <BsFillExclamationCircleFill className='bsIcon' /> }
                </div>            
                <div className="form-control">
                    <input 
                    type='password'
                    name='password'
                    className='form-input'
                    value={values.password}
                    onChange={handleChange}
                    placeholder= {!password && 'Password'}
                    style={password && {border: 'solid 2px hsl(0, 100%, 74%)'}}
                    />
                    <small style={firstName && {visibility: 'visible'}}>{password}</small>
                    {password && <BsFillExclamationCircleFill className='bsIcon' /> }
                </div>                
                <button 
                className="txtSubmit"
                type='submit'
                onClick={handleSubmit}>
                    CLAIM YOUR FREE TRIAL
                </button>
            </form>
            <p id="para3">By clicking the button, you are agreeing to our <b>Terms and Services</b></p>
        </div>
    )
}

export default FormSignUp

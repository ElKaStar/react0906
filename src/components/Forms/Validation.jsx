import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './StyleForm.css'



export const requiredNumber = value => (value || typeof value === 'number' ? undefined : 'Required number')

export const requiredString = value => (value || typeof value === 'string' ? undefined : 'Required string')
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength1 = minLength(1)
export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const maxLength15 = maxLength(15)
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
export const tooYoung = value =>
  value && value < 18
    ? 'You do not meet the minimum age requirement!'
    : undefined
export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

 export const renderField = ({
      value,
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) => (

        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched &&
            ((error && <span className='errorType'> {error}</span>) ||
              (warning && <span className='errorType'> {error}{warning}</span>))}
        </div>

    )

export const renderFieldNew = (field) => (
    <div>
        <textarea {...field.input} type="textarea" value={field.value}/>
        {field.meta.touched && field.meta.error &&
        <span className="errorType">{field.meta.error}</span>}
    </div>
)



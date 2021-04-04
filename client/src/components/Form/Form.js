import React, { useEffect, useState } from 'react'
import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import { useHistory } from 'react-router-dom'

import useStyles from './styles.js'
import { useForm } from './useForm.js'
import Input from './Input.js'
import Notification from '../../components/Notification/Notification'
import * as api from '../../api'

const initialForm = { name: '', email: '', phone: '', dob: ''}

const Form = () => {
  const [isSignup, setIsSignup] = useState(true)
  const [notify, setNotify] = useState({isOpen: false, message: '', type: ''})
  const history = useHistory()
  const classes = useStyles()
 
  useEffect(() => {
    let email = localStorage.getItem('email')
    email && history.push('/')
  }, [])

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialForm)

  const switchMode = () => {
    setIsSignup(prevMode => !prevMode)
    resetForm()
  }

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,4})/
    temp.name = fieldValues.name !== '' ? '' : "Name is required"
    temp.email = emailRegex.test(fieldValues.email) ? '' : "Invalid mail id"
    temp.dob = ((new Date() -  new Date(fieldValues.dob)) / 31536000000) >= 18 ? '' : "Age must be 18+"
    setErrors({
      ...temp
    })

    return Object.values(temp).every(x => x === '')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSignup) {
      if (validate()) {
        try {
            const { data } = await api.register(values)
            localStorage.setItem('email', data )
            setNotify({
              isOpen: true,
              message: 'An email has been sent to your mail id!',
              type: 'success'
            })
            resetForm()
            history.push('/')
        } catch (error) {
          setNotify({
            isOpen: true,
            message: error.response.data.message,
            type: 'error'
          })
        }   
      }
    } else {
      try {
        const { data } = await api.login(values)
        localStorage.setItem('email', data)
        resetForm()
        history.push('/')
      } catch (error) {
        setNotify({
          isOpen: true,
          message: error.response.data.message,
          type: 'error'
        })
      }
    }
      
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Notification notify={notify} setNotify={setNotify} />
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Register' : 'Log In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name='name' label='Name' value={values.name} errorMsg={errors.name} onChange={handleInputChange} />
                </>
              )
            }
            <Input name='email' label='Email' value={values.email} errorMsg={errors.email} onChange={handleInputChange} />
            {
              isSignup && (
                <>
                  <Input name='phone' label='Phone' value={values.phone} errorMsg={errors.phone} onChange={handleInputChange} />
                  <Input name='dob' label='DOB' type='date' defaultValue='2017-05-24' errorMsg={errors.dob} onChange={handleInputChange} />
                </>
              )
            }
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            Submit
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already Registered? Sign In' : "Don't have an account? Register"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Form

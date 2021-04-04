import { Grid, TextField } from '@material-ui/core'
import React from 'react'

const Input = (props) => {

  const {name, label, value, type, errorMsg=null, onChange, ...other } = props
  return (
    <Grid item sm={12}>
      <TextField
        variant='outlined'
        name={name}
        label={label}
        value={value}
        type={type}
        fullWidth
        {...(errorMsg && { error: true, helperText: errorMsg })}
        {...other}
        onChange={onChange}
      />
    </Grid>  
  )
}

export default Input

import React from 'react'
import useStyles from './styles.js'
import { Paper } from '@material-ui/core'


const Profile = ({user}) => {
  const classes = useStyles()
  return (
    <Paper className={classes.container} elevation={0}>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.dob}</h3>
    </Paper>
  )
}

export default Profile

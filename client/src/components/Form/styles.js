import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(10),
    },
  },
  avatar: {
    marginTop: theme.spacing(1),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3,0,2),
  }
}))
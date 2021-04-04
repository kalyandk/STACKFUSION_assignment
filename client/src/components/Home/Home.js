import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'

import Profile from "../Profiles/Profile"
import * as api from '../../api'

const Home = () => {

  const [users, setUsers] = useState()
  
  useEffect(async () => {
      const { data } = await api.fetchUsers()
      setUsers(data)
  }, [])
  
  
  return (
    !users ? <CircularProgress /> : (
      <>
        <h1>Profiles</h1>
        {users.map(user => <Profile user={user} />)}
      </>
    )
  )
}

export default Home

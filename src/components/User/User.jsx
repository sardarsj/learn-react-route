import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userid} = useParams();
  return (
    <div>
      This is the user: {userid}
    </div>
  )
}

export default User

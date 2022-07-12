import React, { useEffect, useState } from 'react'

// redux
import { getAllUsers } from '../redux/slices/users/users'
import { useDispatch,useSelector } from 'react-redux'

const UsersList = () => {

  const { list:users } = useSelector(state => state.users)

  const dispatch = useDispatch()
    
  useEffect(() => {

    dispatch(getAllUsers())

  }, [dispatch])

  return (

    <div className="row">

    {users?.map(user => (

      <div className="col-md-3" key={user.id}>
        <div className="card">
          <img src={user.avatar} alt="" width={100}/>

          <div className="card-body">
            <h5 className="card-title">{user.first_name} </h5>
            <p className="card-text">{user.email}  </p>

          </div>

        </div>
        
      
      </div>

    ))}

    </div>
  )
}

export default UsersList
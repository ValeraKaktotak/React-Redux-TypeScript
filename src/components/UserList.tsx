import { useTypedDispatch } from "hooks/useTypedDispatch"
import { useTypedSelector } from "hooks/useTypedSelector"
import React, { useEffect } from "react"
import { fetchUsers } from "store/action-creators/user"
import type {} from 'redux-thunk/extend-redux'


const UserList: React.FC = () => {
    const {error, loading, users} = useTypedSelector(state => state.users)
    const dispatch = useTypedDispatch()
    
    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error</h1>
    }

    return (
        <div>
            {users.map(user => 
                <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}

export default UserList
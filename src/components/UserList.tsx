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


    return (
        <div>
            fdgsfgdfgsdf
        </div>
    )
}

export default UserList
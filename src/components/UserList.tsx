import { useTypedSelector } from "hooks/useTypedSelector"
import React from "react"

const UserList: React.FC = () => {
    const {error, loading, users} = useTypedSelector(state => state.users)
    console.log(users)
    return (
        <div>
            fdgsfgdfgsdf
        </div>
    )
}

export default UserList
import React, { useState } from 'react'

export const SignIn = () => {
    const { loggedInUser, setLoggedInUser } = useState("Masoma")
    return (
        <div>
            <h1>Sign In</h1>
            <h2>{loggedInUser}</h2>
        </div>
    )
}
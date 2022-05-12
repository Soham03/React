import React from 'react'

const Loggedin = () => {

    let email=JSON.parse(localStorage.getItem("email"));

    function handleClick()
    {
        localStorage.setItem('isLoggedIn',JSON.stringify(0))
        window.location.reload();
    }
    return (
        <div>
            <h1>User:{email} is Logged in!</h1>
            <br/>
            <button type="submit" onClick={handleClick}>Logout</button>
        </div>
        

    )
}

export default Loggedin

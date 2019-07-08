import React, { useState } from 'react';

const FormSearch = props => {
    const [user, setUser] = useState()

    const handleChangeInput = event => {
        event.preventDefault()
        setUser(event.target.value)
        console.log(user)
        props.getMoviesDB(user)
    }

    return (
        <form
            onSubmit = {event => {
                event.preventDefault()
                props.getMoviesDB(user)
                setUser('')
            }}
        >
            <input type='text'
                value={user}
                placeholder='Search for a movie, a tv show, person...'
                onChange={handleChangeInput}    
            >
            </input>
        </form>
    )
}

export default FormSearch
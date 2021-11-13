import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [admin, setAdmin] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)

                    setAdmin(true)

                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h3>Make An Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField label="Email" type="email" onBlur={handleOnBlur} variant="filled" />
                <br />

                <Button type="submut">Make Admin</Button>

            </form>
            {admin && <Alert severity="success">User created successfully — check it out!</Alert>}


        </div>
    );
};

export default MakeAdmin;
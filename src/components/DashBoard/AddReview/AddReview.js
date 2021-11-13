import { Box } from '@mui/system';
import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from './../../../hooks/useAuth';


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()

    //post Reviews Details to Server
    const onSubmit = data => {
        data.name = user.displayName;

        fetch('https://polar-peak-09049.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Your review is added")
                    reset();
                    window.location.reload()
                }
            })
    }
    return (
        <Box style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '110px' }}>
            <Typography variant='h5'>
                Hello: {user.displayName} <br />
                <Box variant="h4" sx={{ fontWeight: 500, color: '#DE3163' }}>
                    Write a review
                </Box>
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    required
                    id="filled-multiline-static"
                    multiline
                    rows={4}
                    type='text'
                    label="Review"
                    defaultValue=''
                    {...register("review", { required: true })}
                    sx={{ m: 1, width: '80%' }}
                    variant="filled" /> <br />

                <Button variant='contained' type='submit' >Add Review</Button>
            </form>
        </Box>
    );
};

export default AddReview;
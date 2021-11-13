import { Paper, Typography } from '@mui/material';
import React from 'react';

const MakeReview = ({ makeReview }) => {
    const { name, review } = makeReview;
    return (
        <Paper sx={{ p: 2 }} style={{ maxWidth: '600px', margin: '0 auto', marginTop: '20px' }}>
            <Typography variant='h5'>
                {name}
            </Typography>
            <Typography variant='p'>
                {review}
            </Typography>
        </Paper>
    );
};

export default MakeReview;
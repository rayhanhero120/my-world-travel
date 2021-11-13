import { Container, Paper, Typography } from '@mui/material';
import React from 'react';
import MakeReview from '../MakeReview/MakeReview';


const MyReview = () => {
    const [myReview, setMyReview] = React.useState([]);
    React.useEffect(() => {
        fetch('https://polar-peak-09049.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [])


    return (
        <Container>
            <Paper>

            </Paper>
            <Typography variant='h4' sx={{ fontWeight: 600, color: 'blue', m: 3 }}>
                Customers reviews here
            </Typography>

            {
                myReview.map(makeReview => <MakeReview
                    key={makeReview._id}
                    makeReview={makeReview}

                ></MakeReview>)
            }
        </Container>
    );
};

export default MyReview;
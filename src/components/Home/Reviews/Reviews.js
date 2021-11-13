import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import car_review from '../../../images/car review.jpg'
import { Container } from '@mui/material';



const Reviews = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Typography sx={{ my: 3, fontWeight: 500, color: '#DE3163' }} variant="h5" component="div">
                Customer Review
            </Typography>
            <Typography sx={{ fontWeight: 600, color: 'blue', m: 3 }} variant="h4" component="div">
                What they say about us
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={car_review} alt="" />

                </Grid>
                <Grid item xs={12} md={6} >
                    <Typography sx={{ my: 3, fontSize: 18 }} variant="h6" component="div" >
                        Our Products has customer review ..they are very satisfied using our products.so they have many positive review for us . we got the point and we work vey eaily
                        Our Products has customer review
                        <br />
                        <small>...........Denny Morn</small>
                    </Typography>
                    <Typography sx={{ my: 3, fontSize: 18 }} variant="h6" component="div">
                        Our Products has customer review ..they are very satisfied using our products.so they have many positive review for us . we got the point and we work vey eaily
                        Our Products has customer review
                        <br />
                        <small>.............Rasib Hasan</small>
                    </Typography>
                    <Typography sx={{ my: 3, fontSize: 18 }} variant="h6" component="div">
                        Our Products has customer review ..they are very satisfied using our products.so they have many positive review for us . we got the point and we work vey eaily
                        Our Products has customer review
                        <br />
                        <small>.............Michale Debon</small>
                    </Typography>


                </Grid>

            </Grid>
        </Container>
    );
};

export default Reviews;
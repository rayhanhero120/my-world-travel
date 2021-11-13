import React from 'react';
import Grid from '@mui/material/Grid';
import carBanner from '../../../images/car banner.png'
import { Button, Container } from '@mui/material';


const CarBanner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={carBanner} style={{ width: '250%' }} alt="" />
                    <Button variant="contained" style={{
                        backgroundColor:
                            'red'
                    }}>explore</Button>

                </Grid>
            </Grid>
        </Container>
    );
};

export default CarBanner;
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import './Footer.css'

const Footer = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ backgroundColor: 'black', marginTop: '20px' }}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                        <Box>Car Sells</Box>
                        <Box sx={{ fontSize: 10 }}>  This is the best way to buy the car their are many cars.you will define it very easily so you can buy now.plz continue with us for our best reviwers</Box>


                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                        <Box>Our Links</Box>
                        <Box sx={{ fontSize: 10 }}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Rated</li>
                                <li>Blog</li>
                            </ul>

                        </Box>


                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                        <Box>Other Links</Box>
                        <Box sx={{ fontSize: 10 }}>
                            <ul>
                                <li>Contact</li>
                                <li>Support</li>
                                <li>Private Policy</li>
                                <li>Faq</li>
                                <li>Terms & condition</li>

                            </ul>

                        </Box>


                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                        <Box>Call now</Box>
                        <Box sx={{ fontSize: 10 }}>
                            <ul>
                                <li>+07-2933333339</li>
                                <li>01728888345</li>
                                <li>+09-33445566</li>

                            </ul>

                        </Box>

                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Footer;
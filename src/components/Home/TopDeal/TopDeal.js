import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import car1 from '../../../images/cars9.jpg'
import car2 from '../../../images/cars8.jpg'
import car3 from '../../../images/car11.jpg'
import { Container } from '@mui/material';


const TopDeal = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Typography sx={{ my: 3, fontWeight: 500, color: '#DE3163' }} variant="h6" component="div">
                Top rated dealers
            </Typography>
            <Typography sx={{ fontWeight: 600, color: 'blue', m: 3 }} variant="h4" component="div">
                Explore Our Top Deal
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345, my: 5 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={car1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Audi
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Audi is the top at the rated of squamate reptiles, with over 7,000
                                species, ranging across all continents except America
                            </Typography>
                        </CardContent>

                    </Card>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345, my: 5 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={car2}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Nissan
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nissan is a famous brand.Many of them are special squamate reptiles, with over 9,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>

                    </Card>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345, my: 5 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={car3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Toyota
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Toyota is a another top rated  group of squamate reptiles, with over 8,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopDeal;
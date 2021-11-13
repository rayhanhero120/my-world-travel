import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const Product = ({ product }) => {
    const { _id, name, description, img, invented, fuel_source, price } = product
    return (
        <Grid item xs={4} sm={4} md={4} sx={{ my: 5, mt: 5 }} >

            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" color="text.contained" gutterBottom>
                        Name:{name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} variant="h6" component="div">
                        {description}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontWeight: 'bold' }} color="text.secondary">
                        Invented: {invented}
                    </Typography>
                    <Typography variant="body2">
                        Fuel Source: {fuel_source}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="body2">
                        Price:${price}
                    </Typography>
                    <Button variant="contained" style={{
                        backgroundColor:
                            'red'
                    }}><Link to={`/purchase/${_id}`}>Purchase</Link></Button>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;
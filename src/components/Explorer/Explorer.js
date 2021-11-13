import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Explore from '../Explore/Explore';

const Explorer = () => {
    const [explorer, setExplorer] = useState([])
    useEffect(() => {
        fetch('https://polar-peak-09049.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setExplorer(data))

    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>


            <Container>
                <Typography sx={{ my: 3, fontWeight: 500, color: '#DE3163' }} variant="h5" component="div">
                    Our Products
                </Typography>
                <Typography sx={{ fontWeight: 600, color: 'blue', m: 3 }} variant="h4" component="div">
                    Feel the best Experience with Our Rental Deals
                </Typography>


                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        explorer.map(explore => <Explore

                            explore={explore}

                        ></Explore>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Explorer;
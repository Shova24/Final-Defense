import React from 'react';
import './Offer.css'
import { Grid, Paper, Typography,Container, Button  } from "@mui/material";


const Offer = () => {
    return (
        <>
            <Container>
                <Typography color='var(--orange)' textAlign="center" variant="h4" sx={{p:3, m:3}}>
                   We Offer...
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={2} sx={{bgcolor: '#f9683a', p:1, m:2, height: '17rem'}}>
                            <Typography variant="h4" sx={{p:3}}>
                                Trusted Care
                            </Typography>
                            <Typography variant="body2" color="white" sx={{p:3}}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptate, corporis ad odio neque eligendi repudiandae consequatur. repudiandae consequatur..repudiandae 
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={2} sx={{bgcolor: '#f9683a', p:1, m:2,height: '17rem'}}>
                            <Typography variant="h4" sx={{p:3}}>
                            Well Certified
                            </Typography>
                            <Typography variant="body2" color="white" sx={{p:3}}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptate, corporis ad odio neque eligendi repudiandae consequatur.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={2} sx={{bgcolor: '#f9683a', p:1, m:2, height: '17rem'}}>
                            <Typography variant="h4" sx={{p:3}}>
                               Professional Nanny
                            </Typography>
                            <Typography variant="body2" color="white" sx={{p:3}}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptate, corporis ad odio neque eligendi repudiandae consequatur.
                            </Typography>
                        </Paper>
                    </Grid>
                   
                </Grid>
            </Container>
        </>
    );
};

export default Offer;
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material'
import organic from '../assets/organicStore1.jpg'
import organic1 from '../assets/organicStore2.jpg'
import organic2 from '../assets/organicStore3.jpg'


export default function MovingCarousel() {
    const items = [
        {
            image: `${organic1}`,
        },
        {
            image: `${organic}`,
        },
        {
            image: `${organic2}`,
        }
    ]

    return (
        <Carousel animation='slide' navButtonsAlwaysVisible duration={300}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Grid container>
            <Grid item xs={12}>
                <img src={props.item.image} alt='carousel' height='500px' width="100%" />
            </Grid>
        </Grid>
    )
}
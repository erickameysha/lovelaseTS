import React from 'react';
import test from './images/test.png'
import './CatalogItem.css'
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';




export const CatalogItem = (props) => {
     let setId = () => {
       return  setId(props.id)
    }



    return (
      <Card className='Card-item' sx={{ maxWidth: 440 }}>
        <div className={'item'}>
          <Link >
            {/* <div className="catalog-images"> */}
            <CardMedia
            component="img"
            height="194"
            image={props.img}
            alt="Paella dish"
            
            />

          </Link>
            {/* <div className={'catalog-subtitle'}>
                <span className={'catalog-subtitle__title'}>{props.title}</span>
                <span className={'catalog-subtitle__color'}>{props.color}</span>
                <span className={'catalog-subtitle__subtitle'}>{props.price}</span>
            </div> */}
              <CardContent className='contentItem-Typography'>
        <Typography variant="p" color="text.secondary">
        {props.title}
        </Typography>
        <Typography variant="p" color="black">
        {props.color}
        </Typography>
        <Typography variant="p" color="text.secondary">
        {props.price}
        </Typography>
      </CardContent>
        </div>
        </Card>
    );
};

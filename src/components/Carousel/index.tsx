import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ItemCarousel } from './styles';
import { item, datatype } from '../../data/filesPath';

function CarouselCustom (props:{Itens: datatype}){
    return(
        <Carousel indicators={false}>               
            {props.Itens.map((item: item) => 
                <Carousel.Item style={{padding: '0.5rem'}}>
                    <ItemCarousel className="d-block" src={item.Img} style={{justifyContent: "center", alignItems: "center", margin: "0 auto"}}/>
                </Carousel.Item>
                )
            }
        </Carousel>
    );
} 
 
export default CarouselCustom; 
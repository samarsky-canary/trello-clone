import React from 'react';
import {CardContainer} from './styles';


interface CardProps {
    title: string;
    index: number
}

export const Card = ({title, index} : CardProps) => {
    return    (
    <CardContainer>
        {title}
    </CardContainer>);
}
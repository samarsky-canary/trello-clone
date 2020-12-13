import React from 'react';
import {CardContainer} from './styles';


interface CardProps {
    title: string;
}

export const Card = ({title} : CardProps) => {
    return    (
    <CardContainer>
        {title}
    </CardContainer>);
}
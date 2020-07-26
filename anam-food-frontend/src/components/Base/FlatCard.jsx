import React from 'react';
import styled from 'styled-components';

const FlatCard = styled.div`
    position: absolute;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    margin-left: ${props => (100 - props.width) / 2}%;
    margin-right: ${props => (100 - props.width) / 2}%;
    border-radius: 50px;
    background-color: #dee2e6;
    box-shadow: 20px 20px 60px #bdc0c4,
                -20px -20px 60px #ffffff;
    width: ${props => props.width}%;
    height: ${props => props.height}%;
`;

const Card = (props) => {
    return <FlatCard width={props.size.width} height={props.size.height} top={props.location.top} left={props.location.left}/>;
}

export default Card;
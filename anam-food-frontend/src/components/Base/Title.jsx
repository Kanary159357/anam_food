import React from 'react';
import styled from 'styled-components';

const TitleText = styled.div`
    font-size: 3rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    margin-bottom: 3rem;
`;

const Title = (props) => {
    return <TitleText>{ props.title }</TitleText>
}

export default Title;
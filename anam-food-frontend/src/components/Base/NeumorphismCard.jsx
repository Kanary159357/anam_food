import styled from 'styled-components';

export const FlatCard = styled.div`
    border-radius: 50px;
    background-color: #dee2e6;
    box-shadow: 20px 20px 60px #bdc0c4,
                -20px -20px 60px #ffffff;
    margin: 20px;
    height: ${props => props.height};
`;
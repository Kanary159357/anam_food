import React from 'react';

import { Grid, Row, Col } from '../components/Base/Flex';
import { FlatCard } from '../components/Base/NeumorphismCard';
import Title from '../components/Base/Title';

const Main = () => {
    return (
        <div>
            <Title title="오늘의 추천"/>
            <Grid>
                <Row>
                    <Col size={1}>
                        <FlatCard height="20rem"/>
                    </Col>
                    <Col size={1}>
                        <FlatCard height="20rem"/>
                    </Col>
                    <Col size={1}>
                        <FlatCard height="20rem"/>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Main;
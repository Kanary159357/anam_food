import React from 'react';

import FlatCard from '../components/Base/FlatCard';
import Title from '../components/Base/Title';

const Main = () => {
    return (
        <div>
            <Title title="오늘의 추천"/>
            <FlatCard size={{width: "85", height: "20"}} location={{top: "50", left: "0"}}/>
        </div>
    );
}

export default Main;
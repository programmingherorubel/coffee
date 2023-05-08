import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Add from './Add';
import Coffee from './Coffee';

const home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Add />
            <Coffee />
        </div>
    );
};

export default home;
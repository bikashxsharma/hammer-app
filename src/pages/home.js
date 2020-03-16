import React from 'react';

//component
import Navbar from '../components/Navbar'
import LeftFeed from '../components/LeftFeed'
import MainFeed from '../components/MainFeed'

//pages

const home = () => {

    return (
        <div>
            <Navbar />
            <div className="container">
                <LeftFeed />
                <MainFeed />


            </div>

        </div>
    )


}

export default home;
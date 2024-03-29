import React from 'react';
import './home.css'
import Navbar from '../components/Navbar';
import TextEffect from './effect';

const Home = () => {

    return (
        <>
        <Navbar />
        <div className='heading-cont'>
            <h1 className="main-heading" id='main-heading'>Produly</h1>
            <br />
            <h2>Write, Organize, Elove</h2>
            <h3><TextEffect text="Discover the seamless workspace where smarter, more efficient work unfolds." setDelayTime={75}/></h3>
        </div>
        </>
    )
}

export default Home
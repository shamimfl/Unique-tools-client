import React from 'react';
import Reviue from '../../Reviue/Reviue';
import Banner from '../Banner/Banner';
import BussnessSummary from '../BusssnessSummary/BussnessSummary';
import Footer from '../Footer/Footer';
import Parts from '../Parts/Parts';
import ReviueFrom from '../ReviueFrom/ReviueFrom';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <Service></Service>
            <BussnessSummary></BussnessSummary>
            <Reviue></Reviue>
            <Footer></Footer>
        </div>
    );
};

export default Home;
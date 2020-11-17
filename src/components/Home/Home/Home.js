import React from 'react';
import CardHouse from '../CardHouse/CardHouse';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchHome from '../SearchHome/SearchHome';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
      return (
            <div>
                  <Header></Header>
                  <SearchHome></SearchHome>
                  <CardHouse></CardHouse>
                  <ServiceCard></ServiceCard>
                  <Footer></Footer>
            </div>
      );
};

export default Home;
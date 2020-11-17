import React from 'react';
import Header from '../../Home/Header/Header';
import ApartmentDescription from '../ApartmentDescription/ApartmentDescription';
import Banner from '../Banner/Banner';
import DetailsInfo from '../DetailsInfo/DetailsInfo';

const ApartmentDetails = () => {
      return (
            <div>
                  <Header></Header>
                  <Banner></Banner>
                  <DetailsInfo></DetailsInfo>
                  <ApartmentDescription></ApartmentDescription>
            </div>
      );
};

export default ApartmentDetails;
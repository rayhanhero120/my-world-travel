import React from 'react';
import MyReview from '../../DashBoard/MyReview/MyReview';
import CarBanner from '../CarBanner/CarBanner';
import Header from '../Header/Header/Header';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopDeal from '../TopDeal/TopDeal';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CarBanner></CarBanner>
            <Products></Products>
            <Reviews></Reviews>
            <MyReview></MyReview>
            <TopDeal></TopDeal>

        </div>
    );
};

export default Home;
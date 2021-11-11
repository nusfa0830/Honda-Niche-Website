import React from 'react';
import Bannar from '../Bannar/Bannar';
import FeaturesBike from '../FeaturesBike/FeaturesBike';

import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReview from '../HomeReview/HomeReview';
import Navigation from '../Shared/Navigarion/Navigation';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Bannar></Bannar>
            <HomeProducts></HomeProducts>
            <FeaturesBike></FeaturesBike>
            <HomeReview></HomeReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;
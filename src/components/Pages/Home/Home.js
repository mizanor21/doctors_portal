import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import HeaderHighlight from '../HeaderHighlight/HeaderHighlight';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import PatientFeedback from '../PatientFeedback/PatientFeedback';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <HeaderHighlight></HeaderHighlight>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <PatientFeedback></PatientFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;
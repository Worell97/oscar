import React, {useState, useEffect} from 'react';
import PageDefault from '../../components/pageDefault';
import AboutMe from '../aboutMe';
import Home from '../home';

function MainPage(){
    return(
        <PageDefault>
            <Home/>
            <AboutMe/>                 
        </PageDefault>
    );
}

export default MainPage;
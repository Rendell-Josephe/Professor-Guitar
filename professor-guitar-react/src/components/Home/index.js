import React from 'react'
import {HomeContainer, HomeContent, HomeH1, HomeP, IdeaBalloon} from './HomeElements'
import { ReactComponent as Logo} from '../../images/idea.svg';
import './idea.css'

const HomeSection = () => {
    return (
        <HomeContainer>
            <HomeContent>
                <IdeaBalloon> <Logo /> </IdeaBalloon>
                
                <HomeH1>Everything at one place</HomeH1>
                <HomeP>Days of spending hour
                Looking for recourses
                to learn the guitar are
                gone...
                </HomeP>

            </HomeContent>    
        </HomeContainer>
    )
}

export default HomeSection

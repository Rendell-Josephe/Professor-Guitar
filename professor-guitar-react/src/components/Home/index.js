import React from 'react'
import {HomeContainer, HomeContent, HomeH1, HomeP, IdeaBalloon, Logo} from './HomeElements'


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

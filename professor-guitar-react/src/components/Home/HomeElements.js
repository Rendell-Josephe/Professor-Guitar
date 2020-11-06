import styled, { keyframes } from 'styled-components';
import img from './page1.png';
import '.../../../src/fonts//Inter-Bold.woff';
import '.../../../src/fonts//Inter-Medium.woff';
import { ReactComponent as Idea} from '../../images/idea.svg';


export const HomeContainer = styled.div`
 background-image: url(${img});
 height: 100vh;
 background-position: right;
 background-size: 180vh;
 background-repeat: no-repeat;
 overflow: hidden;
 background-color:  #0B0c10;
 box-shadow: 3px 4px 20px 0px rgba(0,0,0,9) inset;
`;



export const IdeaBalloon = styled.div`
 position: absolute;
 z-index:1;
 padding-top: 10vh;
 svg{
 height: 640px;
 width: 740px;
}
`;

export const Logo = styled(Idea)``;


export const HomeContent = styled.text`
 max-width: 1200px;
 padding: 8px 24px;
 flex-direction: column;
 align-items: left;
`;

export const HomeH1 = styled.h1`
 display: flex;
 flex-direction: row;
 z-index:2;
 color: whitesmoke;
 font-size: 48px;
 text-align: center;
 font-family: 'Inter', sans-serif;
 font-weight: bold;
 position: absolute;

 @media screen and (max-width: 968px) {
     font-size: 40px
 }

 @media screen and (max-width: 480px) {
     font-size: 32px
 }
`;

export const HomeP = styled.p`
z-index: 2;
display: flex;
flex-wrap: wrap;
 margin-top: 24px;
 color: white;
 font-size: 24px;
 padding-top: 99px;
 text-align: center;
 max-width: 600px;
 font-family: 'Inter', sans-serif;
 position: absolute;

 @media screen and (max-width: 968px) {
     font-size: 20px
 }

 @media screen and (max-width: 968px) {
     font-size: 18px
 }
`;
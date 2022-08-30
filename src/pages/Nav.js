import React from 'react';
import '../style/Nav.css';
import Logoh from '../OutDocument/vi_2.png';
import '../style/Responsiv.css';
import Tabs from './Tabs';

 const Nav = () =>{
    return(
        <>
        <Tabs />
        <div className="NavTab">
        <div className='Logo'>
                <img src={Logoh} className="logos"></img>
                <h1 
                    className='logoText'>
                        House Mall
                    </h1>
                <p 
                    className='logoP'>
                Уй сотиб олишда алданиб
                қолмаслигингиз учун <br></br>
                инновацион ечим берамиз.
                </p>
            </div>
        </div>
           {/* <div 
                className='nav'>
            <div 
                className='images_8'>
                <img src={Eight1}></img>
                <img src={Eight2}></img>
                <img src={Eight3}></img>
                <img src={Eight4}></img>
                <img src={Eight5}></img>
                <img src={Eight6}></img>
                <img src={Eight7}></img>
                <img src={Eight8}></img>
            </div>
            <div 
                className='finans'>
                    <img src={Money} className="mn1"></img>
                    <img src={RightImg} className="rghImg"></img>
                    <img src={RightImg12} className="rghImg12"></img>
            </div>
            <div className='box'>
                <img src={Vi65} style={{transform:"translate(300px , -15px)"}}></img>
                <img src={Vi64} className="vi64"></img>
                <img src={Vi63} style={{transform:"translateX(188px)"}}></img>
                <img src={Vi62} style={{transform:"translateX(84px) translateY(8px)"}}></img>
                <img src={Vi61} style={{transform:"translateX(-52px) translateY(16px)"}}></img>
                <img src={Vi60} style={{transform:"translateX(-221px) translateY(24px)"}}></img>
                <img src={Vi59} style={{transform:"translateX(-422px) translateY(32px)"}}></img>
            </div>
            <div className='Logo'>
                <img src={Logoh} className="logos"></img>
                <h1 
                    className='logoText'>
                        House Mall
                    </h1>
                <p 
                    className='logoP'>
                Уй сотиб олишда алданиб
                қолмаслигингиз учун <br></br>
                инновацион ечим берамиз.
                </p>
            </div>
            <div className='consImg'>
                <img src={Vi7} style={{transform:"translateX(370px) translateY(-476px)"}}></img>
                <img src={Ri10} className="ri10"></img>
                <img src={Ri9} style={{transform:"translate(366px, -884px)"}}></img>
                <img src={Ri6} style={{transform:"translateY(-846px) translateX(502px)"}}></img>
                <img src={Vi4} style={{position:"absolute" , transform:"translateY(-750px) translateX(140px)"}}></img>
            </div>
            <div className='boxTwo'>
                <img src={Vi219} style={{transform:"translateX(325px)"}}></img>
                <img src={Vi220} style={{transform:"translateX(231px)"}}></img>
                <img src={Vi221} style={{transform:"translateX(155px)"}}></img>
                <img src={Vi222} style={{transform:"translateX(93px)"}}></img>
                <img src={Vi223} style={{transform:"translateX(48px)"}}></img>
                <img src={Vi224} style={{transform:"translateX(20px)"}}></img>
                <img src={Vi225} style={{transform:"translateX(7px)"}}></img>
            </div>
            <div className='Vis'>
            <img src={Vi7} style={{transform:"translateY(-1163px) translateX(98px)"}}></img>
            <img src={Ri11} style={{transform:"translateY(-1265px) translateX(-599px)" , width:"345px"}}></img>
            </div>
           </div> */}
        </>
    );
 }

export default Nav;
import React from 'react';
import '../style/Solve.css';
import Vi65 from '../OutDocument/vi_65.png';
import Vi64 from '../OutDocument/vi_64.png';
import Vi63 from '../OutDocument/vi_63.png';
import Vi62 from '../OutDocument/vi_62.png';
import Vi61 from '../OutDocument/vi_61.png';
import Vi60 from '../OutDocument/vi_60.png';
import Vi59 from '../OutDocument/vi_59.png';
import Vi212 from '../OutDocument/vi_212.png';
import Ri21 from '../OutDocument/ri_21.png';
import Tabs from './Tabs';
    function Solve(){
        return(
            <>
            <Tabs />
                <div className='solve'>
                    <img src={Vi212} style={{position:"absolute" , zIndex:"-1"}}></img>
                    <h1 className='SlvH1M'>
                        Халқимиз орасида мавжуд <br></br>
                        муаммолар
                    </h1>
                    <h2  className='SlvH2M'>
                        Уй Сотиб Олмокчимисиз
                    </h2>
                    <h3 className='SlvH3M' style={{transform:"translate(60px , 90px)" , width:"200px"}}>
                        Нима киласиз?
                    </h3>
                    <ul className='ulOne'>
                        <li className='liOne'>Маклерларга мурожаат қиласиз</li>
                        <li className='liOne'>Реклама ёки интернет орқали қидирасиз</li>
                        <li className='liOne'>Кўчмас мулк агентликларига мурожаат қиласиз</li>
                        <li className='liOne'>Телефонда ўтириб 100 дан ортиқ қурувчилар билан <br></br>гаплашасиз</li>
                        <li className='liOne'>Ўзингиз қурилган уйларга бориб танлайсиз</li>
                    </ul>
                    <div className='slvDiv'>
                        <img src={Vi65} style={{transform:"translate(300px , -15px)"}}></img>
                        <img src={Vi64} className="vi64"></img>
                        <img src={Vi63} style={{transform:"translateX(188px)"}}></img>
                        <img src={Vi62} style={{transform:"translateX(84px) translateY(8px)"}}></img>
                        <img src={Vi61} style={{transform:"translateX(-52px) translateY(16px)"}}></img>
                        <img src={Vi60} style={{transform:"translateX(-221px) translateY(24px)"}}></img>
                        <img src={Vi59} style={{transform:"translateX(-422px) translateY(32px)"}}></img>
                    </div>
                    <img className='Ri21' src={Ri21}></img>
                </div>
            </>
        );
    }

export default Solve;
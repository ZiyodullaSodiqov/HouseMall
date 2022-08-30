import React from 'react';
import '../style/About.css';
import Vi159 from '../OutDocument/vi_159.png';
import Ri25 from '../OutDocument/ri_25.png';
import Ri35 from '../OutDocument/ri_35.png';

    function About(){
        return(
            <>
                <div className='about'>
                    <img src={Vi159} alt={''}></img>
                    <img src={Ri25} style={{position:"absolute" , transform:"translateY(146px) translateX(-414px)"}} alt={''}></img>
                    <img src={Ri35} style={{position:"absolute" , transform:"translateY(149px) translateX(-270px)"}} alt={''}></img>
                    <h2 style={{color:"#B7A16C" , fontWeight:"700" , transform:"translate(520px, -480px)" , width:"800px"}}>
                    House Mall сизга юқоридаги муаммоларни келиб <br></br>
                    чиқмаслиги учун комплекс ечимни беради.
                    </h2>
                    <p className='abtP1'>
                        Компанимиз бир неча йилдан бери уй сотиб <br></br>
                        олмоқчи бўлган халқимиз фуқароларига ҳамда <br></br>
                        қурилиш саноатидаги тадбиркорлар ва <br></br>
                        инвесторларга ўз хизматларини таклиф қилиб. <br></br>
                        келмоқда.
                    </p>
                    <p className='abtP2'>
                        Бизнинг мақсадимиз – юқорида айтилган
                        йўналишларни ўзаро боғлаш, бизнес эгалари ва
                        халқимизга фойдали хизмат кўрсатиш.
                    </p>
                </div>
            </>
        );
    }

export default About;
import React from 'react';
import Tabs from './Tabs';
import '../style/HomeSelect.css';
import RepeatedImg from '../images/slctHome.bmp';
import SelectImg from '../images/creatHome.bmp';

    const HomeSelect = () =>{
        return(
            <>
            <Tabs />
                <div className="XmSlct">
                    <img src={RepeatedImg}></img>
                    <h2 className='XmsH2'>
                    Ўзингиз истагандек уйни топиш учун шаҳардаги <br></br>
                    барча уйларни кўриб чиқиш шарт эмас
                    </h2>
                    <h2 className="XmSlct2H">
                    Биз мингдан ортиқ уйлар ичидан <br></br>
                    фақатгина сизнинг талабларингизга <br></br>
                    мос вариантларни тақдим этамиз
                    </h2>
                    <img src={SelectImg} className="XmSlctImage"></img>
                    <p className="XmpOne">
                        Мижознинг талаблари, <br></br>
                        хоҳиш ва истаклари,<br></br>
                        буджетини аниқлаш  
                    </p>
                    <p className="XmpTwo">
                        Мижоз учун энг<br></br>
                        оптимал варинатларни<br></br>
                        тақдим этиш
                    </p>
                    <p className="XmpThree">
                        Мақул топилган уйни<br></br>
                        расмийлаштириш<br></br>
                        ишларида кўмаклашиш
                    </p>
                    <p className="XmpFor">
                        Баъзадан мижоз<br></br>
                        талабларига мос<br></br>
                        уйларни қидириш
                    </p>
                </div>
            </>
        );
    }






export default HomeSelect;
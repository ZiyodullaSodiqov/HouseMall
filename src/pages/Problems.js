import React from 'react';
import '../style/Problems.css';
import Ri23 from '../OutDocument/ri_23.png';

    function Problems(){
        return(
            <>
            <div className='problem'>
                <img src={Ri23} style={{transform:"translate(250px , 250px)"}}></img>
                <h3 style={{color:"#113a83" , width:"450px" , transform:"translate(780px , -150px)" , fontWeight:"700"}}>
                    Келиб чикадиган муаммолар
                </h3>
                <ul className='ulTwo'>
                    <li className='liTwo'>Талабларингизга мос уй топа олмайсиз</li>
                    <li className='liTwo'>Вақтнинг кўп сарфланиши</li>
                    <li className='liTwo'>Телефонда қониқарли жавоб ололмайсиз</li>
                    <li className='liTwo'>Алданиб қолиш ҳолатлари</li>
                    <li className='liTwo'>Турли жойларга кўп пул сарфланиши</li>
                    <li className='liTwo'>Қимматга харид қилиш</li>
                    <li className='liTwo'>Тўлов қилиб уй ололмаслик</li>
                    <li className='liTwo'>Уйнинг сифатлилигини текшириб бориш <br></br>имконининг йўқлиги</li>
                </ul>
            </div>
            </>
        );
    }






export default Problems;
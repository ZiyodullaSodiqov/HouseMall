import React from 'react';
import '../style/Home.css';
import '../style/Responsiv.css';
import Vi49 from '../OutDocument/vi_49.png';
import Vi193 from '../OutDocument/vi_211.png';
import Tabs from './Tabs';

    function Home(){
        return(
            <>
            <Tabs />
                <div className="xmBox">
                    <img src={Vi193} className="vi193"></img>
                    <img src={Vi49} className="XmboxLogo"></img>
                    <h1 
                    className='xmLogo'>
                        House Mall
                    </h1>
                    <h1 className='XmH1M'>
                        УЙ ҚИДИРАЯПСИЗМИ?
                    </h1>
                    <h2 style={{color:"#fff" , fontFamily:"Overpass, sans-serif" , fontWeight:"700" , transform:"translateX(60px)" , width:"400px" , lineHeight:"2.5rem"}}>
                        House Mall компанияси <br></br>
                        сизга яқиндан <br></br>
                        ёрдам беради.
                    </h2>
                    <div className='xmDivBox1'>
                        <h2 style={{color:"#fff" ,fontFamily:"Overpass, sans-serif" ,textAlign:"center" , transform:"translateY(35px)"}}>Энг оптимал ечимни</h2>
                    </div>
                    <div className='xmDivBox2'>
                        <h2 style={{color:"#fff" ,fontFamily:"Overpass, sans-serif" ,textAlign:"center" , transform:"translateY(35px)"}}>Ишончли уйлар</h2>
                    </div>
                    <div className='xmDivBox3'>
                        <h2 style={{color:"#fff" ,fontFamily:"Overpass, sans-serif" ,textAlign:"center" , transform:"translateY(35px)"}}>Ишончли уйлар</h2>
                    </div>
                    <div className='xmDivBox4'>
                        <h2 style={{color:"#fff" ,fontFamily:"Overpass, sans-serif" ,textAlign:"center" , transform:"translateY(35px)"}}>Сифатли хизматни</h2>
                    </div>
                </div>
            </>
        );
    }


export default Home;
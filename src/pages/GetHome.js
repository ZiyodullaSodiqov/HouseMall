import React from 'react';
import '../style/GetHome.css';
import Tabs from './Tabs';
import GetHomeImg from '../images/homeKey.bmp';

    const GetHome = () =>{
        return(
            <>
                <Tabs />
                <img className='GXMiMg' src={GetHomeImg}></img>
                <h1 className='HsdHsdJ'>
                    House Mall kompaniyasi <br></br> sizga nima beradi? 
                </h1>
            </>
        );
    }






export default GetHome;
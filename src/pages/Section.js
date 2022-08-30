import React from 'react';
import '../style/Section.css';
import Tabs from './Tabs';
import LogohImg from '../OutDocument/vi_2.png';

    const Section =() =>{
        return(
            <div className="sct">
            <Tabs />
                <div className="section">
                    <h1 className='cmpn'>“House Mall” - барча мақсадларни <br></br>
                        бир жойда жамлаган компания
                    </h1>
                    <img src={LogohImg} className="cmpLogin"></img>
                </div>
            </div>
        );
    }






export default Section;
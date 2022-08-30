import React from 'react';
import '../style/Founder.css';
import CreatorImg from '../OutDocument/ri_13.png';
import '../style/Responsiv.css';
import Tabs from './Tabs';

    const Founder = () =>{
        return(
            <>
            <Tabs />
                <div className='foundBox'>
                    <img src={CreatorImg} className="fndRp"></img>
                    <h2 className='fbxH2'>
                        House Mall компанияси мақсади
                    </h2>
                    <p className="fbxP">
                    Мақсадамиз - ўз қадриятларига эга, ноқонуний қурилиш <br></br>
                    қилмайдиган, қурилишда- сифатни биринчи ўринга
                    қўядиган, <br></br> ҳалол қурувчиларни аниқлаб, уларни халққа
                    танитиш ва шу билан <br></br> бирга халқимизнинг янги
                    қурилаётган уй- жойларни харид қилиш <br></br> жараёнини
                    енгиллаштириш, юзага келиши мумкин бўлган <br></br>
                    муоммоларни бартараф қилиш, яъни алданиб қолишдан
                    ҳалос <br></br> қилишдир. Шу орқали юртдошларимиз иқтисодий
                    барқарорлигини <br></br> таминлаш ва фаровон ҳаёт
                    кечиришларида ўз хиссамизни қўшишдир.
                    </p>
                    <div className='names'>
                        <h2 className="fndName">
                            Компания рахбари:
                        </h2><br></br>
                    <h1 className='fndJ'>
                        Жўрабек Матякубов
                    </h1>
                    </div>
                </div>
            </>
        );
    }


    // function Founder(){
    //     return(
    //         <>
    //             <div className='foundBox'>
    //                 <img src={CreatorImg} className="fndRp"></img>
    //                 <h2 className='fbxH2'>
    //                     House Mall компанияси мақсади
    //                 </h2>
    //                 <p className="fbxP">
    //                 Мақсадамиз - ўз қадриятларига эга, ноқонуний қурилиш <br></br>
    //                 қилмайдиган, қурилишда- сифатни биринчи ўринга
    //                 қўядиган, <br></br> ҳалол қурувчиларни аниқлаб, уларни халққа
    //                 танитиш ва шу билан <br></br> бирга халқимизнинг янги
    //                 қурилаётган уй- жойларни харид қилиш <br></br> жараёнини
    //                 енгиллаштириш, юзага келиши мумкин бўлган <br></br>
    //                 муоммоларни бартараф қилиш, яъни алданиб қолишдан
    //                 ҳалос <br></br> қилишдир. Шу орқали юртдошларимиз иқтисодий
    //                 барқарорлигини <br></br> таминлаш ва фаровон ҳаёт
    //                 кечиришларида ўз хиссамизни қўшишдир.
    //                 </p>
    //                 <div className='names'>
    //                     <h2 className="fndName">
    //                         Компания рахбари:
    //                     </h2><br></br>
    //                 <h1 className='fndJ'>
    //                     Жўрабек Матякубов
    //                 </h1>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // }

export default Founder;
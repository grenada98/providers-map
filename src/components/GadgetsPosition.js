import React, { useEffect } from "react";
import { Line } from "./Line";
import { DownloadData } from "./DATA";

export const GadgetsPosition = (props) => {
    const addClass = [' --small', ' --medium', ' --large'];
    const gadgetName = ['phone', 'laptop', 'display'];

    return(
        <div className="gadgets__wrapper">
            {
                props.gadgetPositions?.map((item, index)=>{
                    return(
                        <React.Fragment key={index}>
                            {props.count>index?<div className={"gadgets__item" + addClass[index]} style={item.position}>
                                <div className="gadgets__item fake">
                                </div>
                                {item.download&&props.fourthStep?<div className="gadgets__item-text">Time: {item.download}</div>:null}
                                {item.downloadMain&&props.fifthStep?<div className="gadgets__item-text">Time: {item.downloadMain}</div>:null}
                                {props.thirdStep?<Line 
                                                        thirdStep={props.thirdStep} //условие для отображения линий к локальным серверам
                                                        fourthStep={props.fourthStep} //условие для отображения линий к главным серверам
                                                        fifthStep={props.fifthStep}

                                                        linesLocalPosition={props.linesLocalPosition} //позиция линий к локальным серверам
                                                        mainServerId={props.mainServerId} //для отображения линий к главному серверу
                                                        index={props.index} //для уточнения позиции линий
                                                        indexItem={index} //для уточнения позиции линий

                                                        serversObjects={props.serversObjects}
                                                        gadgetPositions={props.gadgetPositions}
                                                        gadgetPostitionsArray={props.gadgetPostitionsArray}
                                                        setGadgetPositions={props.setGadgetPositions}

                                                        gadgetPositionsItem={item}
                                                        pointsObjectsItem={props.pointsObjectsItem}
                                                        pointsObjects={props.pointsObjects}/> : null}
                                <img className="gadgets__item-img" src={process.env.PUBLIC_URL + "/img/" + gadgetName[index] + ".png"} alt={gadgetName}/>
                            </div>: null}
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}







            {/* <div className="gadgets__item --small" style={props.gadgetPositions[0].position}>
                <div className="gadgets__item fake">
                </div>
                {props.secondStep?<Line 
                                        thirdStep={props.thirdStep}
                                        fourthStep={props.fourthStep}
                                        linesLocalPosition={props.linesLocalPosition}
                                        mainServerId={props.mainServerId} 
                                        index={props.index} 
                                        indexItem={0} 
                                        positionLines={props.positionLines}/> : null}
                <img className="gadgets__item-img" src={process.env.PUBLIC_URL + "/img/phone.png"} alt='phone'/>
            </div>
            {props.count>1?<div className="gadgets__item --medium" style={props.gadgetPositions[1].position}>
                <div className="gadgets__item fake"></div>
                {props.secondStep? <Line 
                                        thirdStep={props.thirdStep}
                                        fourthStep={props.fourthStep}
                                        linesLocalPosition={props.linesLocalPosition}
                                        mainServerId={props.mainServerId} 
                                        index={props.index} 
                                        indexItem={1} 
                                        positionLines={props.positionLines}/> : null}
                <img className="gadgets__item-img" src={process.env.PUBLIC_URL + "/img/laptop.png"} alt='notebook'/>
            </div> : null}
            {props.count>2?<div className="gadgets__item --large" style={props.gadgetPositions[2].position}>
                <div className="gadgets__item fake"></div>
                {props.secondStep? <Line 
                                        thirdStep={props.thirdStep}
                                        fourthStep={props.fourthStep}
                                        linesLocalPosition={props.linesLocalPosition}
                                        mainServerId={props.mainServerId} 
                                        index={props.index}
                                        indexItem={2} 
                                        positionLines={props.positionLines}/> : null}
                <img className="gadgets__item-img" src={process.env.PUBLIC_URL + "/img/display.png"} alt='display'/>
            </div> : null} */}
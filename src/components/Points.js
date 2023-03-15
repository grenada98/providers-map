import React from "react";
import { PeoplePosition } from './PeoplePosition'
import { GadgetsPosition } from './GadgetsPosition'
import { useState, useEffect } from "react";

export const Points = (props) => {
    const [count, setCount] = useState(null); //количество людей передаю в PeoplePosition, если больше 0, то отображаем гаджеты
    useEffect(()=>{
        if(count){
            props.setPointsObjects(props.pointsObjects.map((item)=>(
                item.id===props.pointsObjectsIndex? {...item, selected: true, count: count} : item
            )))
        }
    }, [count])
    return(
        <div key={props.pointsObjectsIndex} className="points__wrapper" style={props.position}>
            {props.pointsObjects[props.pointsObjectsIndex].count>0 || props.firstStep? null:<PeoplePosition 
                    setCount={setCount} 
                    countSelect={props.countSelect} 
                    setCountSelect={props.setCountSelect}/>}
            
            {props.pointsObjects[props.pointsObjectsIndex].count>0?<GadgetsPosition 
                    index={props.pointsObjects[props.pointsObjectsIndex].id} //для уточнения позиции линии
                    //item={props.item}

                    count={props.pointsObjects[props.pointsObjectsIndex].count} //для передачи количества гаджетов
                    linesLocalPosition={props.pointsObjects[props.pointsObjectsIndex].location} //для позиций линий

                    pointsObjects={props.pointsObjects}
                    pointsObjectsItem={props.pointsObjectsItem}

                    setGadgetPositions={props.setGadgetPositions}
                    gadgetPositions={props.gadgetPositions} 
                    gadgetPostitionsArray={props.gadgetPostitionsArray}

                    serversObjects={props.serversObjects}
                    
                    mainServerId={props.mainServerId}
                    positionLines={props.positionLines}
                    
                    secondStep={props.secondStep}
                    thirdStep={props.thirdStep}
                    fourthStep={props.fourthStep}
                    fifthStep={props.fifthStep}/> : null}
        </div>
    )
}
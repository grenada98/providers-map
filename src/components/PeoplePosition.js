import React from "react";

export const PeoplePosition = (props) => {
    return(
        <div className="people-position__wrapper">
            <div className="people --large" onClick={()=>{props.setCountSelect(props.countSelect + 1); props.setCount(3);}}>
            </div>
            <div className="people --medium" onClick={()=>{props.setCountSelect(props.countSelect + 1); props.setCount(2);}}>
            </div>
            <div className="people --small" onClick={()=>{props.setCountSelect(props.countSelect + 1); props.setCount(1);}}>
            </div>
        </div>
    )
}
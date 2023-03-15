import React, { useEffect, useState } from "react";

export const Servers = (props) => {
    function selectServers(){
        if(props.countServers === 0){
            props.setMainServerId({...props.mainServerId, id: props.item.id})
            props.setServersObjects(props.serversObjects.map(item=>{
                if(props.index===item.id){
                    return {...item, mainServer: true, selected: true}
                }
                else{
                    return item
                }
            }))
        }
        else{
            props.setServersObjects(props.serversObjects.map(item=>{
                if(props.index===item.id){
                    return {...item, selected: true}
                }
                else{
                    return item
                }
            }))
        }
        props.setCountServers(props.countServers + 1)
    }
    return(
        <div className="servers__wrapper" style={props.item.position}  onClick={()=>selectServers(props.index)}>
            {props.mainServerId.id==props.item.id&&props.item.selected? <img className="servers__img-big" src={process.env.PUBLIC_URL + "/img/Servers_blue and red.png"} alt="place"/> : null}
            {!props.item.selected? <img src={process.env.PUBLIC_URL + "/img/Cloud_1_example.png"} alt="place"/> : null}
            {props.item.selected&&props.countServers>1&&props.mainServerId.id!=props.item.id? <img className="servers__img" src={process.env.PUBLIC_URL + "/img/Servers_blue.png"} alt="server"/> : null}
        </div>
    )
}
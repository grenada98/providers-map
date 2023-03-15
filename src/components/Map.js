import React, { useEffect, useState } from 'react'
import { Points } from './Points';
import { Servers } from './Servers';
import {positionsLineNewZealand, 
        positionsLineWestUsa, 
        positionsLineEastUsa, 
        positionsLineEurope,
        positionsLines} from './DATA';


export const Map = () =>{
    const [countSelect, setCountSelect] = useState(0);
    const [countServers, setCountServers] = useState(0);
    const [mainServerId, setMainServerId] = useState({id: null, name: null});

    const [firstStep, setFirstStep] = useState(false); //первый этап выбора количества людей, завершается при нажатии на кнопку
    const [secondStep, setSecondStep] = useState(false); //второй этап выбора главного, а потом локальных серверов
    const [thirdStep, setThirdStep] = useState(false);
    const [fourthStep, setFourthStep] = useState(false);
    const [fifthStep, setFifthStep] = useState(false);
    useEffect(()=>{
        if(countServers==4){
            setSecondStep(true)
        }
    }, [countServers])
    
    const [pointsObjects, setPointsObjects] = useState([
        {id: 0, location: "WestUsa", position: {top: '30%', left: '15%'}, count: 0, selected: false, server: "EastUsa", serverSelected: false, lines: positionsLineEastUsa[0]},
        {id: 1, location: "EastUsa", position: {top: '66%', left: '27%'}, count: 0, selected: false, server: "WestUsa", serverSelected: false, lines: positionsLineWestUsa[1]},
        {id: 2, location: "NewZealand", position: {top: '73%', left: '80%'}, count: 0, selected: false, server: "NewZealand", serverSelected: false, lines: positionsLineNewZealand[2]},
        {id: 3, location: "NewZealand", position: {top: '37%', left: '69%'}, count: 0, selected: false, server: "NewZealand", serverSelected: false, lines: positionsLineNewZealand[3]},
        {id: 4, location: "Europe", position: {top: '27%', left: '50%'}, count: 0, selected: false, server: "Europe", serverSelected: false, lines: positionsLineEurope[4]}])
    
    useEffect(()=>{
        if(firstStep&&!thirdStep)
        {
            filterGadgetPosition();
        }
    }, [pointsObjects])

    useEffect(()=>{
        if(fifthStep){
            console.log(gadgetPositions)
            console.log(pointsObjects)
        }
    }, [fifthStep])

    useEffect(()=>{
        if(countSelect===5)
        { 
            setFirstStep(true);
            filterGadgetPosition();
        }
    }, [countSelect])
    const [gadgetPositions, setGadgetPositions] = useState([
        [{city: "Dallas", position: {top: '63%', left: '37%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Salt Lake City", position: {top: '0%', left: '0%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Chicago", position: {top: '0%', left: '86%'}, download: null, downloadMain: null, latency: null}], 
    
        [{city: "Brasilia", position: {top: '-13%', left: '47%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Bogota", position: {top: '-46%', left: '0%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Buenos Aires", position: {top: '35%', left: '19%'}, download: null, downloadMain: null, latency: null}],
        
        [{city: "Melbourne", position: {top: '25%', left: '34%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Perth", position: {top: '11%', left: '-6%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Sydney", position: {top: '10%', left: '77%'}, download: null, downloadMain: null, latency: null}],
        
        [{city: "New Delhi", position: {top: '40%', left: '83%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Dhaka", position: {top: '63%', left: '-6%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Seoul", position: {top: '-72%', left: '125%'}, download: null, downloadMain: null, latency: null}],
        
        [{city: "Warsaw", position: {top: '29%', left: '19%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Madrid", position: {top: '80%', left: '-62%'}, download: null, downloadMain: null, latency: null}, 
        {city: "Moscow", position: {top: '-30%', left: '82%'}, download: null, downloadMain: null, latency: null}]])
    
    
    function filterGadgetPosition(){
        let newGadget = [];
        newGadget = pointsObjects.map((item)=>{
            return gadgetPositions[item.id]
        })
        newGadget.map((item, index)=>{
            if(pointsObjects[index].count==2){
                return item.splice(2, 2)
            }
            if(pointsObjects[index].count==1){
                return item.splice(1, 2)
            }
        })
        setGadgetPositions([...newGadget])
    }
    
    
    
    const [serversObjects, setServersObjects] = useState([
        {id: 0, location: "WestUsa", mainServer: false, position: {top: '42%', left: '15%'}, selected: false, city: "Los Angeles"}, 
        {id: 1, location: "EastUsa", mainServer: false, position: {top: '33%', left: '30%'}, selected: false, city: "New York"}, 
        {id: 2, location: "Europe", mainServer: false, position: {top: '32%', left: '49%'}, selected: false, city: "Frankfurt"}, 
        {id: 3, location: "NewZealand", mainServer: false, position: {top: '64%', left: '78%'}, selected: false, city: "Singapore"}])

    function selectMainServer(){
        const NameMainServerArray = serversObjects.filter(item=>item.mainServer==true);
        if(NameMainServerArray.length>0){
            const NameMainServer = NameMainServerArray[0].location;
            setMainServerId({...mainServerId, name: NameMainServer})
            setSecondStep(true)
        }
    }
    function filterSelectedServers(){
        const newPointsArray = pointsObjects.map(point => {
            const server = serversObjects.find(server => {
                return server.selected && server.location === point.server;});
            return {
              ...point,
              serverSelected: Boolean(server)
            };
          })
        setPointsObjects([...newPointsArray]);
    }

    useEffect(()=> {
        if(firstStep){
            selectMainServer()
        }
        if(thirdStep){
            filterSelectedServers()
        }
    }, [serversObjects])


    function onNext(){
        if(!firstStep && countSelect>0) {
            setPointsObjects([...pointsObjects.filter(item=>item.selected==true)]); 
            setFirstStep(true)}
        if(firstStep && !secondStep){
            setSecondStep(true);
        }
        if(secondStep && !thirdStep){
            setThirdStep(true);
        }
    } 



    useEffect(()=>{
        if(thirdStep){
            console.log("____________________________________________________________")
            const newServer = serversObjects.filter(item=>item.selected==true);
            console.log(newServer)
            setServersObjects([...newServer]);
            setFourthStep(true)
        }
    }, [thirdStep])

    useEffect(()=>{
        if(fourthStep){
            setTimeout(()=>setFifthStep(true), 5000)
        }
    }, [fourthStep])





    return(
        <div className='map__wrapper'>
            {!thirdStep?<div className='map__popup'>
                {!firstStep?<div>Where are your users? Choose the number for every region.</div> :null}
                {firstStep&&!secondStep?<div>Where is your data? Choose one spot for Object Storage system.</div> : null}
                {secondStep&&!thirdStep?<div>Choose minimum two additional spots for ByteCloud and press.</div> : null}
                <button className='map__button' onClick={onNext}>Next</button>
            </div>: null}
            <div className='map__img'>
                <img src={process.env.PUBLIC_URL + "/img/map.png"} alt="map"/>
                <div className='map__points'>
                {
                pointsObjects.map((item, index)=>{
                    return(
                        <Points key={index} 
                        position={item.position} 
                        pointsObjectsIndex={index} 
                        pointsObjectsItem={item}

                        serversObjects={serversObjects}

                        pointsObjects={pointsObjects}
                        setPointsObjects={setPointsObjects}
                        
                        setGadgetPositions={setGadgetPositions}
                        gadgetPostitionsArray={gadgetPositions}
                        gadgetPositions={firstStep?gadgetPositions[index]:gadgetPositions[pointsObjects[index].id]} 
                        //до выбора точек позиций людей и после
                        
                        countSelect={countSelect} 
                        setCountSelect={setCountSelect}
                        
                        mainServerId={mainServerId}
                        positionsLines={positionsLines}
                        
                        
                        firstStep={firstStep}
                        secondStep={secondStep}
                        thirdStep={thirdStep}
                        fourthStep={fourthStep}
                        fifthStep={fifthStep}/>
                    )
                })
                }
                {
                    firstStep? serversObjects.map((item, index)=>{
                        return(
                            <Servers key={index} 
                            item={item} 
                            index={index} 
                            mainServerId={mainServerId} 
                            setMainServerId={setMainServerId} 
                            setCountServers={setCountServers} 
                            countServers={countServers}
                            serversObjects={serversObjects}
                            setServersObjects={setServersObjects}
                            
                            selected={item.selected}/>
                        )
                    }) : null
                }
                </div>
            </div>
        </div>
    )
}
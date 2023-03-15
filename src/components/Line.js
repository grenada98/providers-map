import React, { useEffect, useState } from "react";
import {
    positionsLines, 
    imgSrc,
    DownloadData} from './DATA';

export const Line = (props) => {
    useEffect(()=>{
        if(props.fourthStep){
            console.log(props.serversObjects)
            const server = props.serversObjects.find(server => {
                console.log("server.location = " + server.location + " props.pointsObjectsItem.server = " + props.pointsObjectsItem.server)
                return server.location === props.pointsObjectsItem.server});
            
            if(server){
                const downloadLocal = DownloadData[props.gadgetPositionsItem.city][server.city] * 10;
                const newObject = [...props.gadgetPositions];
                newObject.map((item, index)=>{
                    if(index===props.indexItem){
                        item.download = downloadLocal;
                        item.latency = DownloadData[props.gadgetPositionsItem.city][server.city];
                    }
                })
                props.setGadgetPositions([...props.gadgetPostitionsArray, newObject])
            }
        }
    },
    [props.serversObjects])
    useEffect(()=>{
        if(props.fifthStep){
            const server = props.serversObjects.find(server => {
                return server.mainServer === true});
            const downloadLocal = (DownloadData[props.gadgetPositionsItem.city][server.city] * 10).toFixed(2);
            const newObject = [...props.gadgetPositions];
            newObject.map((item, index)=>{
                if(index===props.indexItem){
                    item.download = downloadLocal;
                    item.latency = DownloadData[props.gadgetPositionsItem.city][server.city];
                }
            })
            props.setGadgetPositions([...props.gadgetPostitionsArray, newObject])
        }
    }, [props.fifthStep])
    return(
        <div className="lines__wrapper">
            {props.fourthStep&&!props.fifthStep&&props.pointsObjectsItem.serverSelected?<img src={process.env.PUBLIC_URL + imgSrc[props.linesLocalPosition][props.index][props.indexItem]} 
            style={positionsLines[props.linesLocalPosition][props.index][props.indexItem]} alt="line"/>:null}
            
            {props.fifthStep?<img src={process.env.PUBLIC_URL + imgSrc[props.mainServerId.name][props.index][props.indexItem]} 
            style={positionsLines[props.mainServerId.name][props.index][props.indexItem]} alt="line"/>:null}
        </div>
    )
}


//&&props.pointsObjectsItem.serverSelected
//ЕВРОПА-ЗЕЛАНДИЯ ДЛЯ ГЛАВНОГО СЕРВЕРА{top: '120%', left: '-167%', width: '1035%'}, {top: '55%', left: '235%', width: '603%'}, {top: '63%', left: '63%', width: '780%'} 


/**
 *     const positionsLineNewZealand = [[{top: '63%', left: '76%', width: '1500%'},
                                        {top: '80%', left: '45%', width: '1640%'},
                                        {top: '95%', left: '76%', width: '1985%'}
        ],
                                        [{top: '5%', left: '82%', width: '1239%'},
                                        {top: '51%', left: '70%', width: '1365%'},
                                        {top: '-42%', left: '76%', width: '2068%'}
        ],
                                        [{top: '-131%', left: '-117%', width: '451%'},
                                        {top: '-88%', left: '-90%', width: '230%'},
                                        {top: '-115%', left: '-328%', width: '615%'}
        ],
                                        [{top: '71%', left: '38%', width: '170%'},
                                        {top: '82%', left: '73%', width: '200%'},
                                        {top: '88%', left: '-101%', width: '447%'}
        ],
                                        [{top: '67%', left: '74%', width: '610%'}, 
                                        {top: '79%', left: '71%', width: '844%'}, 
                                        {top: '89%', left: '-5%', width: '778%'}]]
    const positionsLineWestUsa = [[{top: '57%', left: '-46%', width: '142%'},
                                    {top: '76%', left: '-17%', width: '122%'},
                                    {top: '96%', left: '-248%', width: '393%'}
                                ],
                                    [{top: '-187%', left: '-487%', width: '644%'},
                                    {top: '-198%', left: '-369%', width: '579%'},
                                    {top: '-233%', left: '-677%', width: '823%'}
                                ],
                                    [{top: '-310%', left: '-1772%', width: '1881%'},
                                    {top: '-283%', left: '-1715%', width: '1818%'},
                                    {top: '-282%', left: '-2767%', width: '2900%'}
                                ],
                                    [{top: '32%', left: '-1642%', width: '1762%'},
                                    {top: '15%', left: '-1505%', width: '1598%'},
                                    {top: '-14%', left: '-2693%', width: '2805%'}
                                ],
                                    [{top: '68%', left: '-974%', width: '1099%'}, 
                                    {top: '76%', left: '-867%', width: '963%'}, 
                                    {top: '87%', left: '-1608%', width: '1740%'}]]
const positionsLineEastUsa = [[{top: '1%', left: '79%', width: '254%'},
                                    {top: '-2%', left: '71%', width: '324%'},
                                    {top: '74%', left: '78%', width: '134%'}
                                ],
                                    [{top: '-300%', left: '-370%', width: '494%'},
                                    {top: '-252%', left: '-370%', width: '453%'},
                                    {top: '-344%', left: '-354%', width: '759%'}
                                ],
                                    [{top: '-386%', left: '-1408%', width: '1513%'},
                                    {top: '-379%', left: '-1354%', width: '1443%'},
                                    {top: '-368%', left: '-2261%', width: '2378%'}
                                ],
                                    [{top: '-80%', left: '-1270%', width: '1383%'},
                                    {top: '-105%', left: '-998%', width: '1093%'},
                                    {top: '-18%', left: '-2020%', width: '2148%'}
                                ],
                                    [{top: '-38%', left: '-525%', width: '633%'}, 
                                    {top: '-91%', left: '-368%', width: '575%'}, 
                                    {top: '-14%', left: '-1065%', width: '1184%'}]]

const positionsLineEurope = [[{top: '-7%', left: '79%', width: '681%'},
                                    {top: '-50%', left: '70%', width: '787%'},
                                    {top: '56%', left: '69%', width: '842%'}
                                ],
                                    [{top: '-290%', left: '82%', width: '346%'},
                                    {top: '-258%', left: '65%', width: '522%'},
                                    {top: '-330%', left: '65%', width: '688%'}
                                ],
                                    [{top: '-403%', left: '-884%', width: '1001%'},
                                    {top: '-379%', left: '-822%', width: '924%'},
                                    {top: '-400%', left: '-1487%', width: '1800%'}
                                ],
                                    [{top: '-214%', left: '-693%', width: '885%'},
                                    {top: '-145%', left: '-506%', width: '693%'},
                                    {top: '-97%', left: '-1181%', width: '1329%'}
                                ],
                                    [{top: '52%', left: '-15%', width: '124%'}, 
                                    {top: '6%', left: '70%', width: '139%'}, 
                                    {top: '5%', left: '-341%', width: '588%'}]]
    const imgSrcNewZealand = [['/img/newzealand/usa1.png', '/img/newzealand/usa2.png', '/img/newzealand/usa3.png'],
                    ['/img/newzealand/southA1.png', '/img/newzealand/southA2.png', '/img/newzealand/southA3.png'],
                    ['/img/newzealand/australia1.png', '/img/newzealand/australia2.png', '/img/newzealand/australia3.png'],
                    ['/img/newzealand/asia1.png', '/img/newzealand/asia2.png', '/img/newzealand/asia3.png'],
                    ['/img/newzealand/europe1.png', '/img/newzealand/europe2.png', '/img/newzealand/europe3.png']];
    
    const imgSrcWestUsa = [['/img/westusa/usa1.png', '/img/westusa/usa2.png', '/img/westusa/usa3.png'],
                            ['/img/westusa/southA1.png', '/img/westusa/southA2.png', '/img/westusa/southA3.png'],
                            ['/img/westusa/australia1.png', '/img/westusa/australia2.png', '/img/westusa/australia3.png'],
                            ['/img/westusa/asia1.png', '/img/westusa/asia2.png', '/img/westusa/asia3.png'],
                            ['/img/westusa/europe1.png', '/img/westusa/europe2.png', '/img/westusa/europe3.png']];
    
    const imgSrcEastUsa = [['/img/eastusa/usa1.png', '/img/eastusa/usa2.png', '/img/eastusa/usa3.png'],
                            ['/img/eastusa/southA1.png', '/img/eastusa/southA2.png', '/img/eastusa/southA3.png'],
                            ['/img/eastusa/australia1.png', '/img/eastusa/australia2.png', '/img/eastusa/australia3.png'],
                            ['/img/eastusa/asia1.png', '/img/eastusa/asia2.png', '/img/eastusa/asia3.png'],
                            ['/img/eastusa/europe1.png', '/img/eastusa/europe2.png', '/img/eastusa/europe3.png']];
    
    const imgSrcEurope = [['/img/europe/usa1.png', '/img/europe/usa2.png', '/img/europe/usa3.png'],
                            ['/img/europe/southA1.png', '/img/europe/southA2.png', '/img/europe/southA3.png'],
                            ['/img/europe/australia1.png', '/img/europe/australia2.png', '/img/europe/australia3.png'],
                            ['/img/europe/asia1.png', '/img/europe/asia2.png', '/img/europe/asia3.png'],
                            ['/img/europe/europe1.png', '/img/europe/europe2.png', '/img/europe/europe3.png']];
 */
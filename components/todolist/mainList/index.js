import React from 'react';
import CountDownTimer from '../deadLineTime';

const MainList = (props) => {
    return (
        <>
            {props.state.map((miss, i) => {
                return <div key={Math.random()} className="flex flex-row items-center px-1 py-3 border-b-2 
                        border-blue-400 flex-nowrap"
                    >
                    <span className="font-semibold text-blue-600 text-md">{props.state[i].mission}</span>
                    <span className="ml-auto mr-1 text-blue-600 ">
                        <CountDownTimer date={props.state[i].time} addMission={props.addMission} />
                    </span>
                    <button className="p-2 mr-1 text-white transition-all duration-300 
                        bg-green-400 border border-transparent rounded-sm cursor-pointer 
                        hover:bg-white hover:text-green-400 hover:border-green-400"
                        onClick={() => props.success(i)}
                    >Successful</button>
                    <button className="p-2 text-white transition-all duration-300 
                        bg-red-400 border border-transparent rounded-sm cursor-pointer 
                        hover:bg-white hover:text-red-400 hover:border-red-400"
                        onClick={() => props.failed(i)}
                    >Failed</button>
                </div>
            })}
        </>
    )
}
export default MainList;
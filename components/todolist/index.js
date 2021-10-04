import React, {useState} from 'react';
import AddMission from './addMission';
import SuccessMissions from './successMissions';
import FailedMissions from './failedMissions';
import MainList from './mainList';
import Link from 'next/link';

const Todos = () => {
    const [state, setState] = useState([ { mission: "Learn Typescript", time: 0 },
        { mission: "Learn Next js", time: 0 },
        { mission: "Learn Node js", time: 0 },  ]);
    const [successList, setSuccessList] = useState([ { mission: "Learn HTML", },
        { mission: "Learn CSS", },
        { mission: "Learn Javascript", }    ]);
    const [failedList, setFailedList] = useState([ { mission: "Lean C#", },
        { mission: "Learn Java", },
        { mission: "Lean C++", }    ]);

    function addMission (mission, time) { 
        setState((prevState) => [...prevState, {mission, time}]);   
    };
    function success (ind) { 
        let myMission = state[ind]; 
        setSuccessList((prevState) => [...prevState, myMission]);
        state.splice(ind, 1);   
    };
    function failed (ind) { 
        let myMission = state[ind];
        setFailedList((prevState) => [...prevState, myMission]);
        state.splice(ind, 1);   
    };

    return (
        <div className="flex flex-col w-[100%] py-10">
            <div className="flex flex-col w-[98%] mr-[1%] ml-[1%] mb-5 justify-center">
                <img src="/todosImg.png" alt="todo-img" 
                    className="w-[170px] h-[170px] rounded-[45%] m-auto"  
                />
                <h1 className="text-center text-xl xl:text-4xl text-gray-600 my-3 font-bold">ToDo List</h1>
                <p className="text-center text-sm xl:text-xl text-gray-600 w-[50%] m-auto font-bold mb-3">
                    This app is usefull for organize your tasks 
                    during a specific time and see how successful you are
                </p>
            </div>
            <div className="flex flex-col w-[98%] mr-[1%] ml-[1%] pt-5 border-4 border-blue-400 rounded-md">
                <h2 className="mb-5 text-lg xl:text-3xl font-semibold text-center text-blue-400">My Missions</h2>
                <div className="px-1 py-5 bg-blue-400">
                    <AddMission state={state} addMission={addMission} />
                </div>
                <MainList state={state} addMission={addMission} success={success} failed={failed} />
            </div>
            <div className="flex flex-row w-full">
                <SuccessMissions successList={successList} />
                <FailedMissions failedList={failedList} />
            </div>
            <div className="flex flex-row justify-center mt-16 mb-5">
                <span className="text-lg text-gray-600">Develped by: 
                    <span className="text-blue-400 cursor-pointer"><Link href="/"> Abbas Msheik</Link></span>
                </span>
            </div>
        </div>
    )
}
export default Todos;
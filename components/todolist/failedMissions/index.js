import React from 'react';

const failedMissions = (props) => {
    return (
        <div className="flex flex-col w-[48%] mx-[1%] mt-5 border-4 border-red-400 rounded-md">
            <h2 className="text-center text-white bg-red-400 text-2xl mb-5 py-5 font-semibold">
                Failed Missions
            </h2>

            {props.failedList.map((miss, i) => {
                return <div key={Math.random()}
                    className="flex flex-row flex-nowrap py-3 px-1 border-b-2 
                        border-red-400 items-center"
                >

                    <span className="text-md font-semibold text-red-600">
                        {props.failedList[i].mission}
                    </span>
                </div>
            })}
        </div>
    )
}

export default failedMissions;

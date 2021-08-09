import React, { useState } from 'react';

const SuccessMissions = (props) => {

    return (
        <div className="flex flex-col w-[48%] mx-[1%] mt-5 border-4 border-green-400 rounded-md">
            <h2 className="text-center text-white bg-green-400 text-2xl mb-5 py-5 font-semibold">
                Successfull Missions
            </h2>

            {props.successList.map((miss, i) => {
                return <div key={Math.random()}
                    className="flex flex-row flex-nowrap py-3 px-1 border-b-2 
                        border-green-400 items-center"
                >

                    <span className="text-md font-semibold text-green-600">
                        {props.successList[i].mission}
                    </span>
                </div>
            })}
        </div>
    )
}

export default SuccessMissions;

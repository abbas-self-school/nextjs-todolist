import React, {useState} from 'react'

const AddMission = (props) => {
    const [newMission, setNewMission] = useState("");

    const [time, setTime] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        setTime(() => e.target.value);
    };

    function handleSubmit (e) {
        e.preventDefault(); 
        newMission && time && props.addMission(newMission, time);
        setNewMission("");
        setTime(0);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}
            className="xl:flex xl:flex-row xl:flex-nowrap w-full items-center justify-center"
        >
            <div className="flex flex-row items-center xl:w-[35%]">
                <label className="mr-auto xl:flex xl:w-[30%] xl:mr-[1%] mt-5 text-xs xl:text-lg text-white">Your Task</label>
                <input
                    type="text" 
                    value={newMission} 
                    onChange={(e) => setNewMission(e.target.value)}
                    className="w-[60%] xl:flex xl:w-[70%] xl:mr-[1%] mt-5 bg-transparent border border-white focus:outline-none p-2
                    text-white placeholder-white text-xs xl:text-lg"
                />
            </div>
            <div className="flex flex-row items-center xl:w-[35%]">
                <label className="mr-auto xl:w-[40%] xl:mr-[1%] mt-5 text-xs xl:text-lg text-white">Date For Deadline</label>
                <input type="date" value={time.days} id="days" onChange={(e) => handleChange(e)} 
                    className="w-[60%] xl:flex xl:w-[60%] xl:mr-[1%] mt-5 bg-transparent border border-white text-white  p-2
                    focus:outline-none placeholder-white text-xs xl:text-lg"
                />
            </div>
            <input type="submit" value="Add Mission"
                className="w-full xl:w-[30%] xl:flex bg-transparent p-2 mt-5 text-white rounded-sm cursor-pointer text-xs xl:text-lg
                hover:bg-white hover:text-blue-400 border border-white
                hover:border-blue-400 transition-all duration-300" 
            />
        </form>
    )
}

export default AddMission;
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
            className="flex flex-row flex-nowrap items-center justify-center"
        >
            <label className="text-md text-white mr-1">Your Task</label>
            <input
                type="text" 
                value={newMission} 
                onChange={(e) => setNewMission(e.target.value)}
                className="bg-transparent border border-white mr-1 focus:outline-none p-2
                text-white placeholder-white"
            />
            <label className="text-md text-white mr-1">Date For Deadline</label>
            <input type="date" value={time.days} id="days" onChange={(e) => handleChange(e)} 
                className="bg-transparent border border-white text-white mr-1 p-2
                focus:outline-none placeholder-white"
            />
            <input type="submit" value="Add Mission"
                className="bg-transparent p-2 text-white rounded-sm cursor-pointer
                hover:bg-white hover:text-blue-400 border border-white
                hover:border-blue-400 transition-all duration-300" 
            />
        </form>
    )
}

export default AddMission;
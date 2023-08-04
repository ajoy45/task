import React, { useEffect, useState } from 'react';
import MyTaskCard from './MyTaskCard';

const MyTask = () => {
    const[myTasks,setMyTAsk]=useState([]);
    console.log(myTasks)
    useEffect(()=>{
        fetch('http://localhost:5000/all-task')
        .then(res=>res.json())
        .then(data=>setMyTAsk(data))
    },[])
    return (
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
        {
            myTasks.map(myTask=><MyTaskCard
             key={myTask._id}
             myTask={myTask}
            ></MyTaskCard>)
        }
       </div>
       
    );
};

export default MyTask;
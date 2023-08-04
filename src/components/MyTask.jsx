import React, { useEffect, useState } from 'react';
import MyTaskCard from './MyTaskCard';
import { toast } from 'react-toastify';

const MyTask = () => {
    const [myTasks, setMyTAsk] = useState([]);
    console.log(myTasks)
    const handelUpdate = (id) => {
        console.log(id)
        fetch(`https://task-server-ajoy45.vercel.app/add-task/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                status: "completed"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    fetch('https://task-server-ajoy45.vercel.app/all-task')
                        .then(res => res.json())
                        .then(data => setMyTAsk(data))
                        toast('update successfully')
                }
            });
    }
    const handelDelete = (id) => {
        console.log(id)
        fetch(`https://task-server-ajoy45.vercel.app/add-task/${id}`, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                fetch('https://task-server-ajoy45.vercel.app/all-task')
                .then(res => res.json())
                .then(data => setMyTAsk(data))
                toast('delete successfully')
            }
        })
    }
    useEffect(() => {
        fetch('https://task-server-ajoy45.vercel.app/all-task')
            .then(res => res.json())
            .then(data => setMyTAsk(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
            {
                myTasks.map(myTask => <MyTaskCard
                    key={myTask._id}
                    myTask={myTask}
                    handelUpdate={handelUpdate}
                    handelDelete={handelDelete}
                ></MyTaskCard>)
            }
        </div>

    );
};

export default MyTask;
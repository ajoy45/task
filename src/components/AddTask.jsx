import React, { useState } from 'react';
import { toast } from 'react-toastify';
const AddTask = () => {
    const[status,setStatus]=useState('')
    const handelAddSubmit=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const photoURL=e.target.photo.value;
        const price=e.target.price.value;
        const description=e.target.description.value;
        const taskInfo={
            name,price,photoURL,description,status:status
        }
        console.log(taskInfo)
        fetch('http://localhost:5000/add-task',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(taskInfo)

        })
        .then(res=>res.json)
        .then(data=>{
            toast('Added task successful')
            console.log(data)
        })
        e.target.name.value="";
        e.target.photo.value="";
        e.target.price.value="";
        e.target.description.value="";
        setStatus(' ')
    }
    return (

        <div>
            <h1 className='my-5 text-center pr-28 font-bold uppercase text-black'> Add TASK</h1>

            <form onSubmit={handelAddSubmit}>
                <div className=' w-1/2 mx-auto '>

                  
                        <input required type="text" name='name' placeholder="Task Name" className="input input-bordered input-primary w-full  mb-3 " />
                        <input type="text" name='photo'placeholder='photo URL'  className="input  input-bordered input-primary w-full mb-3" />
                        <select required onChange={(e) => setStatus(e.target.value)} className="select select-primary w-full mb-3" >
                            <option disabled selected>status</option>
                            <option value='processing'>processing</option>
                            <option value='pending'>pending</option>
                            <option value='completed'>completed</option>

                        </select>
                        <input required type="text" name='price' placeholder="Price" className="input input-bordered input-primary w-full mb-3  " />
                        <textarea required name='description' className="textarea textarea-primary w-full" placeholder="Description"></textarea>
                        <input className='w-full bg-[#4070ff] rounded-xl py-3 text-white' type="submit" value="ADD TASK" />
                   
                </div>

            </form>
        </div>

    );
};

export default AddTask;
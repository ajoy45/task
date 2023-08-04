import React from 'react';

const MyTaskCard = ({myTask}) => {
   const{name,price,photoURL,description,status}=myTask;
   console.log(name,price,photoURL,description,status)
    return (
        <div className="card w-full bg-base-100 shadow-2xl ">
            <figure className="px-10 pt-10">
                <img src={photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Task Name:{name}</h2>
                <p>{description}</p>
                <p>price:${price}</p>
                <div className="card-actions">
                    <button className="px-4 py-2 rounded-lg bg-[#4070ff] text-white">Update</button>
                    <button className=" px-4 py-2 rounded-lg bg-[#4070ff] text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyTaskCard;
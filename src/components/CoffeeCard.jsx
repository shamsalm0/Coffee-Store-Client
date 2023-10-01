import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const CoffeeCard = ({coffee,coffees,setLoadedCoffee}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee;
    

    const handleDelete=_id=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           

              fetch(`http://localhost:9000/coffee/${_id}`,{
                method:'DELETE'
              }   
              )
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount > 0){
                       Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining=coffees.filter(cof=>cof._id!==_id);
              console.log(remaining)
              setLoadedCoffee(remaining);
             
                }
              })

              console.log('delete confirmed')
            }
          })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-20 h-20' src={photo} alt=""/></figure>
  <div className="flex justify-between w-full pr-4">
    <div className='ml-4 mt-7'>
    <h2 className="card-title">Name:{name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
    </div>
    <div className="card-actions justify-end">
    <div className="btn-group btn-group-vertical space-y-4">
  <button className="btn ">View</button>
  <Link to={`/updatecoffee/${_id}`}>
  <button className="btn">Edit</button>
  </Link>
  <button onClick={()=>handleDelete(_id)} className="btn bg-red-700">X</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;
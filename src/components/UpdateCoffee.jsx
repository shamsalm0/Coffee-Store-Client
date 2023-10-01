import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee=useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee;

    const handleUpdate=e=>{
        e.preventDefault();
        const form= e.target;
        const name=form.name.value;
       const quantity=form.quantity.value;      
       const supplier=form.supplier.value;      
       const taste=form.taste.value;      
       const category=form.category.value;      
       const details=form.details.value;      
       const photo=form.photo.value;   
       
       const updatedCoffee={name,quantity,supplier,taste,category,details,photo}
       console.log(updatedCoffee)

       fetch(`http://localhost:9000/coffee/${_id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updatedCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
         
        }
        form.reset();
        console.log(data)
      })
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
        <h2 className='font-extrabold text-xl text-center'>Update Coffee</h2>
        <form onSubmit={handleUpdate}>
<div className='md:flex mb-8'>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Coffee Name</span>
</label>
<label className="input-group">

<input type="text" name='name' placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2 ml-4">
<label className="label">
<span className="label-text">Available Quantity</span>
</label>
<label className="input-group">

<input type="text" name='quantity' placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered w-full" />
</label>
</div>
</div>


<div className='md:flex mb-8'>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Supplier</span>
</label>
<label className="input-group">

<input type="text" name='supplier' placeholder="Enter Coffee Supplier" defaultValue={supplier} className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2 ml-4">
<label className="label">
<span className="label-text">Taste</span>
</label>
<label className="input-group">

<input type="text" name='taste' placeholder="Enter Coffee Taste" defaultValue={taste} className="input input-bordered w-full" />
</label>
</div>
</div>


<div className='md:flex mb-8'>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Category</span>
</label>
<label className="input-group">

<input type="text" name='category' placeholder="Enter coffee Category" defaultValue={category} className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2 ml-4">
<label className="label">
<span className="label-text">Details</span>
</label>
<label className="input-group">

<input type="text" name='details' placeholder="Coffee Details" defaultValue={details} className="input input-bordered w-full" />
</label>
</div>
</div>

<div className='w-full mb-8'>
<div className="form-control w-full">
<label className="label">
<span className="label-text">Photo URL</span>
</label>
<label className="input-group">

<input type="text" name='photo' placeholder="Enter your Photo URL" defaultValue={photo} className="input text-center input-bordered w-full" />
</label>
</div>

</div>

<input type="submit" value="Update Coffee" className='btn btn-block text-[#331A15] bg-[#D2B48C]'/>
        </form>
    </div>
    );
};

export default UpdateCoffee;
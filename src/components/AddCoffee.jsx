import React from 'react';

const AddCoffee = () => {

  const handleSubmit=e=>{
       e.preventDefault();
       const form= e.target;
       const name=form.name.value;
      const quantity=form.quantity.value;      
      const supplier=form.supplier.value;      
      const taste=form.taste.value;      
      const category=form.category.value;      
      const details=form.details.value;      
      const photo=form.photo.value;   
      
      const newCoffee={name,quantity,supplier,taste,category,details,photo}
      console.log(newCoffee)

      fetch('http://localhost:9000/coffee',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          alert('Data Created successfully');
          form.reset();
        }
        console.log(data)
      })

  }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='font-extrabold text-xl text-center'>Add New Coffee</h2>
            <form onSubmit={handleSubmit}>
   <div className='md:flex mb-8'>
   <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
  </label>
</div>
   </div>


   <div className='md:flex mb-8'>
   <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='supplier' placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='taste' placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
  </label>
</div>
   </div>


   <div className='md:flex mb-8'>
   <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='category' placeholder="Enter coffee Category" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered w-full" />
  </label>
</div>
   </div>

   <div className='w-full mb-8'>
   <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='photo' placeholder="Enter your Photo URL" className="input text-center input-bordered w-full" />
  </label>
</div>

   </div>
   
   <input type="submit" value="Add Coffee" className='btn btn-block text-[#331A15] bg-[#D2B48C]'/>
            </form>
        </div>
    );
};

export default AddCoffee;
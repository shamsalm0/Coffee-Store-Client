import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees=useLoaderData();
  const [loadedCoffee,setLoadedCoffee]=useState(coffees)
  return (
    <>
    <div className='m-20'>
      <h2 className='md:text-2xl text-center text-extrabold mb-8'>All Coffees</h2>
     <div className='grid md:grid-cols-2 gap-4'>
     {
        loadedCoffee.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setLoadedCoffee={setLoadedCoffee}></CoffeeCard>)
      }
     </div>
      </div>
    </>
  )
}

export default App


import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries';

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json());

function App() {
  
  return (
    <>
       <h1 className='text-center font-bold'>All the Countries in the World!!</h1>
       <Suspense fallback={<p>Countries are loading.......</p>}>
       <Countries countriesPromise={countriesPromise}></Countries>
       </Suspense>


    </>
  )
}

export default App

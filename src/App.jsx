import { useState } from 'react'       // React Hook to manage state
import "./App.css"

// Child components
import QueueForm from './Components/QueueForm';
import QueueDisplay from './Components/QueueDisplay';

export default function App(){

  // useState creates state variable `queue`
  // Initial value is empty array
  // State = source of truth for entire app
  const [queue, setQueue] = useState([]);

  // Function passed to QueueForm
  // Child does NOT modify state directly
  // Parent owns the state
  const addToQueue = (customer) => {

      // ❌ NEVER mutate state (queue.push)
      // ✅ Always create new array using spread operator
      setQueue([
        ...queue,                          // copy old queue
        {
          ...customer,                    // copy customer object
          id: Date.now(),                 // unique key for React rendering
          status : "waiting"              // default state
        }
      ])
  }

  // Update specific customer's status
  const updateQueue = (id, customerStatus) => {

      // map is used to return a NEW array
      // Only update the matching customer
      setQueue(
        queue.map(customer => (
          customer.id === id
            ? { ...customer, status: customerStatus } // immutable update
            : customer                                // unchanged customer
        ))
      )
  }

  // Remove customer from queue
  const rmvFromQueue = (id) => {

      // filter removes item & returns new array
      setQueue(
        queue.filter(customer => customer.id !== id)
      )
  }

  return(
    <div className="app">
      <header>
        <h1>QUEUE Management Project</h1>
        <h3>Manage Customers Efficiently</h3>
      </header>

      <main>
        {/* Passing function as prop (child → parent communication) */}
        <QueueForm onAdd={addToQueue}/>

        {/* Passing state + functions to child */}
        <QueueDisplay 
          queue={queue} 
          onUpdate={updateQueue} 
          rmvQueue={rmvFromQueue} 
        />
      </main>
    </div>
  )
}

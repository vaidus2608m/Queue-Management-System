import { useState } from "react";
import { FaUserPlus } from 'react-icons/fa';

export default function QueueForm({ onAdd }) {

  // Controlled inputs state
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  // Form submit handler
  const handleSub = (e) => {

    // Prevent page reload
    e.preventDefault();

    // Validation before state update
    if (!name.trim() || !service.trim()) {
      return;
    }

    // Send data to parent component
    // Child NEVER modifies parent state directly
    onAdd({ name, service });

    // Reset form (controlled components)
    setName('');
    setService('');
  }

  return(
    <form className="queue-form" onSubmit={handleSub}>
      <h2>Add To Queue</h2>

      <div className="form-group">
        {/* Controlled input */}
        <input
          type="text"
          placeholder="Customer's Name"
          value={name}                            // state → UI
          onChange={(e) => setName(e.target.value)} // UI → state
        />
      </div>

      <div className="form-group">
        {/* Controlled select */}
        <select 
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option value="Consultation">Consultation</option>
          <option value="Payment">Payment</option>
          <option value="Support">Support</option>
        </select>
      </div>

      <button type="submit">
        <FaUserPlus /> Add Customer
      </button>
    </form>
  )
}

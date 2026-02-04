function QueueDisplay({ queue, onUpdate, rmvQueue }) {
  // Props destructuring (industry standard)
  // queue → data
  // onUpdate, rmvQueue → functions from parent

  return (
    <div className="queue-display">
      <h2>Current Queue</h2>

      {/* Conditional rendering */}
      {/* UI depends on state, NOT manual DOM logic */}
      {queue.length === 0 ? (
        <p className="empty-queue">No Customer Data</p>
      ) : (
        <div className="queue-list">

          {/* Rendering list using map */}
          {queue.map((customer) => (

            // key is REQUIRED for React reconciliation
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>

                {/* Inline style with dynamic value */}
                <span
                  className="status"
                >
                  {customer.status}
                </span>
              </div> 

              <div className="actions">

                {/* Short-circuit conditional rendering */}
                {customer.status === "waiting" && (
                  <button 
                    className="serve-btn"
                    onClick={() => onUpdate(customer.id, 'serving')}
                  >
                    Serve
                  </button>
                )}

                {customer.status === "serving" && (
                  <button 
                    className="complete-btn"
                    onClick={() => onUpdate(customer.id, 'completed')}
                  >
                    Complete
                  </button>
                )}

                {/* Delete action */}
                <button 
                  className="rmv-btn"
                  onClick={() => rmvQueue(customer.id)}
                >
                  Remove
                </button>

              </div>
            </div>  
          ))}
        </div>
      )}
    </div>
  )
}

export default QueueDisplay;

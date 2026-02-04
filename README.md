# Queue Management System

A React-based **Queue Management System** that simulates real-world queue handling scenarios such as banks, hospitals, and service centers.  
The application follows **FIFO (First In, First Out)** logic and provides clear, real-time status updates through a clean and responsive user interface.

---

## Overview

Queue management is a common real-world problem. This project focuses on implementing queue logic on the frontend using React while maintaining clean state management and clear UI feedback.

Users can:
- Add customers to a queue
- Serve customers in the correct order
- Track each customer's current status
- Remove customers after completion

---

## Features

### Core Functionality
- Add customers to the queue
- FIFO-based serving mechanism
- Real-time status updates:
  - Waiting
  - Serving
  - Completed
- Remove customers from the queue

### UI & UX
- Clean and intuitive interface
- Responsive design for different screen sizes
- Color-coded status indicators
- Smooth state transitions

---

## Tech Stack

- React
- JavaScript (ES6+)
- CSS
- React Hooks (`useState`)

---

## Folder Structure

queue-management-system/  
├── public/  
├── src/  
│ ├── components/  
│ │ ├── QueueForm.jsx  
│ │ ├── QueueList.jsx  
│ │ └── QueueItem.jsx  
│ ├── App.jsx  
│ ├── index.js  
│ └── styles.css  
├── .gitignore  
├── package.json  
└── README.md
---

## How the Queue Works

1. Customers are added to the queue in the order they arrive
2. The first customer added is the first to be served (FIFO)
3. When a customer is served, their status changes from **Waiting → Serving**
4. After completion, the customer can be removed from the queue

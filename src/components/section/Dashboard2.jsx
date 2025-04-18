import React from 'react'

function Dashboard2() {
  return (
    <div id="root" className="grid grid-cols-2 h-screen w-full">
      <div className="grid grid-cols-4 w-2/5 border-2">
        <div className="bg-red-400"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-red-400"></div>
        <div className="bg-blue-500"></div>
      </div>
      <div className="grid grid-cols-6 w-3/5">
        <div className="bg-red-400"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-red-400"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-red-400"></div>
        <div className="bg-blue-500"></div>
      </div>
    </div>
  );
}

export default Dashboard2
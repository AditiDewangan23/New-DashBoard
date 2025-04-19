import React from 'react'

function ExerciseGraph() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-1/5">
        <span className="font-extrabold text-2xl">Exercise Minutes</span>
        <span className="text-gray-500">
          Your exercise minutes are ahead of where you normally are.
        </span>
      </div>
      <div className="h-1/5"></div>
    </div>
  );
}

export default ExerciseGraph